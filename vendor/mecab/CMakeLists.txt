# Copyright(C) 2015-2018  Brazil
# Copyright(C) 2022-2023  Sutou Kouhei <kou@clear-code.com>
#
# This library is free software; you can redistribute it and/or
# modify it under the terms of the GNU Lesser General Public
# License as published by the Free Software Foundation; either
# version 2.1 of the License, or (at your option) any later version.
#
# This library is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
# Lesser General Public License for more details.
#
# You should have received a copy of the GNU Lesser General Public
# License along with this library; if not, write to the Free Software
# Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA

set(MECAB_VERSION ${GRN_BUNDLED_MECAB_VERSION})
set(MECAB_DICT_VERSION "102")
set(MECAB_NAIST_JDIC_VERSION ${GRN_BUNDLED_MECAB_NAIST_JDIC_VERSION})

set(MECAB_SOURCE_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../mecab-${MECAB_VERSION}")
set(MECAB_BINARY_DIR "${CMAKE_CURRENT_BINARY_DIR}/../mecab-${MECAB_VERSION}")
set(MECAB_NAIST_JDIC_SOURCE_DIR
  "${CMAKE_CURRENT_SOURCE_DIR}/../mecab-naist-jdic-${MECAB_NAIST_JDIC_VERSION}")

if(GRN_WITH_BUNDLED_MECAB)
  set(MECAB_RELATIVE_DICT_DIR "${CMAKE_INSTALL_SYSCONFDIR}/mecab/dic")
  set(MECAB_RELATIVE_NAIST_JDIC_DICT_DIR
    "${MECAB_RELATIVE_DICT_DIR}/naist-jdic")
  if(WIN32)
    string(REGEX REPLACE "/" "\\\\"
      MECAB_WINDOWS_RELATIVE_NAIST_JDIC_DICT_DIR
      "${MECAB_RELATIVE_NAIST_JDIC_DICT_DIR}")
    set(MECAB_NAIST_JDIC_DICT_DIR
      "$(rcpath)\\..\\${MECAB_WINDOWS_RELATIVE_NAIST_JDIC_DICT_DIR}")
  else()
    set(MECAB_NAIST_JDIC_DICT_DIR
      "$(rcpath)/../${MECAB_RELATIVE_NAIST_JDIC_DICT_DIR}")
  endif()

  set(LIBMECAB_SOURCES
    "${MECAB_SOURCE_DIR}/src/char_property.cpp"
    "${MECAB_SOURCE_DIR}/src/char_property.h"
    "${MECAB_SOURCE_DIR}/src/common.h"
    "${MECAB_SOURCE_DIR}/src/connector.cpp"
    "${MECAB_SOURCE_DIR}/src/connector.h"
    "${MECAB_SOURCE_DIR}/src/context_id.cpp"
    "${MECAB_SOURCE_DIR}/src/context_id.h"
    "${MECAB_SOURCE_DIR}/src/darts.h"
    "${MECAB_SOURCE_DIR}/src/dictionary.cpp"
    "${MECAB_SOURCE_DIR}/src/dictionary.h"
    "${MECAB_SOURCE_DIR}/src/dictionary_compiler.cpp"
    "${MECAB_SOURCE_DIR}/src/dictionary_generator.cpp"
    "${MECAB_SOURCE_DIR}/src/dictionary_rewriter.cpp"
    "${MECAB_SOURCE_DIR}/src/dictionary_rewriter.h"
    "${MECAB_SOURCE_DIR}/src/eval.cpp"
    "${MECAB_SOURCE_DIR}/src/feature_index.cpp"
    "${MECAB_SOURCE_DIR}/src/feature_index.h"
    "${MECAB_SOURCE_DIR}/src/freelist.h"
    "${MECAB_SOURCE_DIR}/src/iconv_utils.cpp"
    "${MECAB_SOURCE_DIR}/src/iconv_utils.h"
    "${MECAB_SOURCE_DIR}/src/lbfgs.cpp"
    "${MECAB_SOURCE_DIR}/src/lbfgs.h"
    "${MECAB_SOURCE_DIR}/src/learner.cpp"
    "${MECAB_SOURCE_DIR}/src/learner_node.h"
    "${MECAB_SOURCE_DIR}/src/learner_tagger.cpp"
    "${MECAB_SOURCE_DIR}/src/learner_tagger.h"
    "${MECAB_SOURCE_DIR}/src/libmecab.cpp"
    # "${MECAB_SOURCE_DIR}/src/mecab-cost-train.cpp"
    # "${MECAB_SOURCE_DIR}/src/mecab-dict-gen.cpp"
    # "${MECAB_SOURCE_DIR}/src/mecab-system-eval.cpp"
    # "${MECAB_SOURCE_DIR}/src/mecab-test-gen.cpp"
    "${MECAB_SOURCE_DIR}/src/mecab.h"
    "${MECAB_SOURCE_DIR}/src/mmap.h"
    "${MECAB_SOURCE_DIR}/src/nbest_generator.cpp"
    "${MECAB_SOURCE_DIR}/src/nbest_generator.h"
    "${MECAB_SOURCE_DIR}/src/param.cpp"
    "${MECAB_SOURCE_DIR}/src/param.h"
    "${MECAB_SOURCE_DIR}/src/scoped_ptr.h"
    "${MECAB_SOURCE_DIR}/src/stream_wrapper.h"
    "${MECAB_SOURCE_DIR}/src/string_buffer.cpp"
    "${MECAB_SOURCE_DIR}/src/string_buffer.h"
    "${MECAB_SOURCE_DIR}/src/tagger.cpp"
    "${MECAB_SOURCE_DIR}/src/thread.h"
    "${MECAB_SOURCE_DIR}/src/tokenizer.cpp"
    "${MECAB_SOURCE_DIR}/src/tokenizer.h"
    "${MECAB_SOURCE_DIR}/src/ucs.h"
    "${MECAB_SOURCE_DIR}/src/ucstable.h"
    "${MECAB_SOURCE_DIR}/src/utils.cpp"
    "${MECAB_SOURCE_DIR}/src/utils.h"
    "${MECAB_SOURCE_DIR}/src/viterbi.cpp"
    "${MECAB_SOURCE_DIR}/src/viterbi.h"
    "${MECAB_SOURCE_DIR}/src/winmain.h"
    "${MECAB_SOURCE_DIR}/src/writer.cpp"
    "${MECAB_SOURCE_DIR}/src/writer.h"
    )
  set(MECAB_SOURCES
    "${MECAB_SOURCE_DIR}/src/mecab.cpp"
    )
  set(MECAB_DICT_INDEX_SOURCES
    "${MECAB_SOURCE_DIR}/src/mecab-dict-index.cpp"
    )

  set(MECAB_CXX_COMPILE_FLAGS "${GRN_CXX_COMPILE_FLAGS}")
  if(GRN_C_COMPILER_GNU_LIKE)
    string(APPEND MECAB_CXX_COMPILE_FLAGS " -Wno-type-limits")
    string(APPEND MECAB_CXX_COMPILE_FLAGS " -Wno-float-equal")
    string(APPEND MECAB_CXX_COMPILE_FLAGS " -Wno-ignored-qualifiers")
    string(APPEND MECAB_CXX_COMPILE_FLAGS " -Wno-unused-function")
  elseif(MSVC)
    # unary minus operator applied to unsigned type, result still unsigned
    # https://docs.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-2-c4146
    string(APPEND MECAB_CXX_COMPILE_FLAGS " /wd4146")
    # 'argument' : conversion from 'type1' to 'type2', possible loss of data
    # https://docs.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-2-c4244
    string(APPEND MECAB_CXX_COMPILE_FLAGS " /wd4244")
    # 'var' : conversion from 'size_t' to 'type', possible loss of data
    # https://docs.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-3-c4267
    string(APPEND MECAB_CXX_COMPILE_FLAGS " /wd4267")
    # 'context' : truncation from 'type1' to 'type2'
    # https://docs.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-1-c4305
    string(APPEND MECAB_CXX_COMPILE_FLAGS " /wd4305")
    # 'function' : destructor never returns, potential memory leak
    # https://docs.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-1-c4722
    string(APPEND MECAB_CXX_COMPILE_FLAGS " /wd4722")
    # Your code uses a function, class member, variable, or typedef
    # that's marked deprecated.
    # https://docs.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-3-c4996
    string(APPEND MECAB_CXX_COMPILE_FLAGS " /wd4996")
    # 'storage-class-keyword' is no longer a supported storage class
    # https://learn.microsoft.com/en-us/cpp/error-messages/compiler-warnings/c5033
    string(APPEND MECAB_CXX_COMPILE_FLAGS " /wd5033")

    # Disable /permissive- specified by MariaDB.
    string(APPEND MECAB_CXX_COMPILE_FLAGS " /permissive")
  endif()

  add_definitions("-DPACKAGE=\"mecab\"")
  add_definitions("-DVERSION=\"${MECAB_VERSION}\"")
  add_definitions("-DDIC_VERSION=${MECAB_DICT_VERSION}")
  if(MSVC)
    add_definitions(
      "-DMECAB_DEFAULT_RC=\"c:\\\\Program Files\\\\mecab\\\\etc\\\\mecabrc\"")
    add_definitions(-DMECAB_USE_THREAD)
    add_definitions(-DDLL_EXPORT)
    add_definitions(-DHAVE_GETENV)
    add_definitions(-DHAVE_STRING_H)
    add_definitions(-DHAVE_UNSIGNED_LONG_LONG_INT)
    add_definitions(-DHAVE_WINDOWS_H)
    add_definitions(-DUNICODE)
    add_definitions(-D_UNICODE)
  else()
    add_definitions(
      "-DMECAB_DEFAULT_RC=\"${CMAKE_INSTALL_FULL_SYSCONFDIR}/mecabrc\"")
    add_definitions(
      "-DICONV_CONST=")
    add_definitions(-DHAVE_DIRENT_H)
    add_definitions(-DHAVE_FCNTL_H)
    add_definitions(-DHAVE_ICONV)
    add_definitions(-DHAVE_STDINT_H)
    add_definitions(-DHAVE_STRING_H)
    add_definitions(-DHAVE_SYS_MMAN_H)
    add_definitions(-DHAVE_SYS_STAT_H)
    add_definitions(-DHAVE_SYS_TYPES_H)
    add_definitions(-DHAVE_UNISTD_H)
  endif()
  set_source_files_properties(${LIBMECAB_SOURCES}
    PROPERTIES
    COMPILE_FLAGS "${MECAB_CXX_COMPILE_FLAGS}")
  set_source_files_properties(${MECAB_SOURCES}
    PROPERTIES
    COMPILE_FLAGS "${GRN_CXX_COMPILE_FLAGS}")
  set_source_files_properties(${MECAB_DICT_INDEX_SOURCES}
    PROPERTIES
    COMPILE_FLAGS "${GRN_CXX_COMPILE_FLAGS}")

  add_library(libmecab SHARED ${LIBMECAB_SOURCES})
  if(NOT MSVC)
    set_target_properties(libmecab PROPERTIES OUTPUT_NAME "mecab")
  endif()
  target_include_directories(libmecab BEFORE PRIVATE ${MECAB_BINARY_DIR})
  target_include_directories(libmecab PUBLIC ${MECAB_SOURCE_DIR}/src)
  add_executable(mecab ${MECAB_SOURCES})
  target_link_libraries(mecab libmecab)
  add_executable(mecab-dict-index ${MECAB_DICT_INDEX_SOURCES})
  target_link_libraries(mecab-dict-index libmecab)
  install(TARGETS libmecab
    ARCHIVE DESTINATION "${CMAKE_INSTALL_LIBDIR}"
    LIBRARY DESTINATION "${CMAKE_INSTALL_LIBDIR}"
    RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}")
  install(TARGETS mecab
    DESTINATION "${CMAKE_INSTALL_BINDIR}")
  install(TARGETS mecab-dict-index
    DESTINATION "${CMAKE_INSTALL_BINDIR}")
  if(MSVC AND CMAKE_VERSION VERSION_GREATER "3.1")
    install(
      FILES
      $<TARGET_PDB_FILE:libmecab>
      $<TARGET_PDB_FILE:mecab>
      $<TARGET_PDB_FILE:mecab-dict-index>
      DESTINATION "${CMAKE_INSTALL_BINDIR}"
      OPTIONAL)
  endif()
  install(FILES "${MECAB_SOURCE_DIR}/src/mecab.h"
    DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}")

  set(MECAB_NAIST_JDIC_BUILD_DATA
    "${CMAKE_CURRENT_BINARY_DIR}/matrix.bin"
    "${CMAKE_CURRENT_BINARY_DIR}/char.bin"
    "${CMAKE_CURRENT_BINARY_DIR}/sys.dic"
    "${CMAKE_CURRENT_BINARY_DIR}/unk.dic")
  add_custom_command(OUTPUT ${MECAB_NAIST_JDIC_BUILD_DATA}
    COMMAND
    mecab-dict-index
    "--dicdir" "${MECAB_NAIST_JDIC_SOURCE_DIR}"
    "--outdir" "${CMAKE_CURRENT_BINARY_DIR}"
    "--dictionary-charset" "EUC-JP"
    "--charset" "utf-8"
    DEPENDS mecab-dict-index
    COMMENT "Build NAIST Japanese Dictionary for MeCab")
  add_custom_target(mecab-naist-jdic ALL
    DEPENDS ${MECAB_NAIST_JDIC_BUILD_DATA})
  install(FILES
    ${MECAB_NAIST_JDIC_BUILD_DATA}
    "${MECAB_NAIST_JDIC_SOURCE_DIR}/dicrc"
    DESTINATION "${MECAB_RELATIVE_NAIST_JDIC_DICT_DIR}")

  configure_file("mecabrc.cmake" "mecabrc")
  install(FILES "${CMAKE_CURRENT_BINARY_DIR}/mecabrc"
    DESTINATION "${CMAKE_INSTALL_SYSCONFDIR}")

  install(FILES
    "${MECAB_NAIST_JDIC_SOURCE_DIR}/AUTHORS"
    "${MECAB_NAIST_JDIC_SOURCE_DIR}/COPYING"
    "${MECAB_NAIST_JDIC_SOURCE_DIR}/README"
    DESTINATION "${GRN_DATA_DIR}/mecab-naist-jdic")
  install(FILES
    "${MECAB_SOURCE_DIR}/AUTHORS"
    "${MECAB_SOURCE_DIR}/BSD"
    "${MECAB_SOURCE_DIR}/COPYING"
    "${MECAB_SOURCE_DIR}/GPL"
    "${MECAB_SOURCE_DIR}/LGPL"
    "${MECAB_SOURCE_DIR}/README"
    DESTINATION "${GRN_DATA_DIR}/mecab")

  configure_file(config.h.cmake "${MECAB_BINARY_DIR}/config.h")
endif()
