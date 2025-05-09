# Copyright (C) 2015-2018  Brazil
# Copyright (C) 2024  Sutou Kouhei <kou@clear-code.com>
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

set(GRN_FUNCTIONS_PLUGIN_DIR "${GRN_RELATIVE_PLUGINS_DIR}/functions")

read_file_list(${CMAKE_CURRENT_SOURCE_DIR}/vector_sources.am VECTOR_SOURCES)
set_source_files_properties(${VECTOR_SOURCES}
                            PROPERTIES COMPILE_FLAGS "${GRN_C_COMPILE_FLAGS}")
if(GRN_EMBED)
  add_library(vector_functions STATIC ${VECTOR_SOURCES})
  set_target_properties(vector_functions PROPERTIES POSITION_INDEPENDENT_CODE
                                                    ON)
else()
  add_library(vector_functions MODULE ${VECTOR_SOURCES})
  set_target_properties(vector_functions PROPERTIES PREFIX "" OUTPUT_NAME
                                                              "vector")
  install(TARGETS vector_functions DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}")
  if(MSVC AND CMAKE_VERSION VERSION_GREATER "3.1")
    install(
      FILES $<TARGET_PDB_FILE:vector_functions>
      DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}"
      OPTIONAL)
  endif()
endif()
target_link_libraries(vector_functions libgroonga)

read_file_list(${CMAKE_CURRENT_SOURCE_DIR}/string_sources.am STRING_SOURCES)
set_source_files_properties(${STRING_SOURCES}
                            PROPERTIES COMPILE_FLAGS "${GRN_C_COMPILE_FLAGS}")
if(GRN_EMBED)
  add_library(string_functions STATIC ${STRING_SOURCES})
  set_target_properties(string_functions PROPERTIES POSITION_INDEPENDENT_CODE
                                                    ON)
else()
  add_library(string_functions MODULE ${STRING_SOURCES})
  set_target_properties(string_functions PROPERTIES PREFIX "" OUTPUT_NAME
                                                              "string")
  install(TARGETS string_functions DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}")
  if(MSVC)
    install(
      FILES $<TARGET_PDB_FILE:string_functions>
      DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}"
      OPTIONAL)
  endif()
endif()
target_link_libraries(string_functions libgroonga onigmo)
target_include_directories(string_functions PRIVATE ${ONIGMO_INCLUDE_DIRS})

read_file_list(${CMAKE_CURRENT_SOURCE_DIR}/number_sources.am NUMBER_SOURCES)
set_source_files_properties(${NUMBER_SOURCES}
                            PROPERTIES COMPILE_FLAGS "${GRN_CXX_COMPILE_FLAGS}")
if(GRN_EMBED)
  add_library(number_functions STATIC ${NUMBER_SOURCES})
  set_target_properties(number_functions PROPERTIES POSITION_INDEPENDENT_CODE
                                                    ON)
else()
  add_library(number_functions MODULE ${NUMBER_SOURCES})
  set_target_properties(number_functions PROPERTIES PREFIX "" OUTPUT_NAME
                                                              "number")
  install(TARGETS number_functions DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}")
  if(MSVC)
    install(
      FILES $<TARGET_PDB_FILE:number_functions>
      DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}"
      OPTIONAL)
  endif()
endif()
target_link_libraries(number_functions libgroonga "${M_LIBS}")

read_file_list(${CMAKE_CURRENT_SOURCE_DIR}/time_sources.am TIME_SOURCES)
set_source_files_properties(${TIME_SOURCES} PROPERTIES COMPILE_FLAGS
                                                       "${GRN_C_COMPILE_FLAGS}")
if(GRN_EMBED)
  add_library(time_functions STATIC ${TIME_SOURCES})
  set_target_properties(time_functions PROPERTIES POSITION_INDEPENDENT_CODE ON)
else()
  add_library(time_functions MODULE ${TIME_SOURCES})
  set_target_properties(time_functions PROPERTIES PREFIX "" OUTPUT_NAME "time")
  install(TARGETS time_functions DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}")
  if(MSVC)
    install(
      FILES $<TARGET_PDB_FILE:time_functions>
      DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}"
      OPTIONAL)
  endif()
endif()
target_link_libraries(time_functions libgroonga)

read_file_list(${CMAKE_CURRENT_SOURCE_DIR}/index_column_sources.am
               INDEX_COLUMN_SOURCES)
set_source_files_properties(${INDEX_COLUMN_SOURCES}
                            PROPERTIES COMPILE_FLAGS "${GRN_C_COMPILE_FLAGS}")
if(GRN_EMBED)
  add_library(index_column_functions STATIC ${INDEX_COLUMN_SOURCES})
  set_target_properties(index_column_functions
                        PROPERTIES POSITION_INDEPENDENT_CODE ON)
else()
  add_library(index_column_functions MODULE ${INDEX_COLUMN_SOURCES})
  set_target_properties(index_column_functions
                        PROPERTIES PREFIX "" OUTPUT_NAME "index_column")
  install(TARGETS index_column_functions
          DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}")
  if(MSVC)
    install(
      FILES $<TARGET_PDB_FILE:index_column_functions>
      DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}"
      OPTIONAL)
  endif()
endif()
target_link_libraries(index_column_functions libgroonga)

read_file_list(${CMAKE_CURRENT_SOURCE_DIR}/math_sources.am MATH_SOURCES)
set_source_files_properties(${MATH_SOURCES} PROPERTIES COMPILE_FLAGS
                                                       "${GRN_C_COMPILE_FLAGS}")
if(GRN_EMBED)
  add_library(math_functions STATIC ${MATH_SOURCES})
  set_target_properties(math_functions PROPERTIES POSITION_INDEPENDENT_CODE ON)
else()
  add_library(math_functions MODULE ${MATH_SOURCES})
  set_target_properties(math_functions PROPERTIES PREFIX "" OUTPUT_NAME "math")
  install(TARGETS math_functions DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}")
  if(MSVC)
    install(
      FILES $<TARGET_PDB_FILE:math_functions>
      DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}"
      OPTIONAL)
  endif()
endif()
target_link_libraries(math_functions libgroonga)

if(GRN_WITH_H3)
  set(H3_SOURCES h3.c)
  set_source_files_properties(${H3_SOURCES} PROPERTIES COMPILE_FLAGS
                                                       "${GRN_C_COMPILE_FLAGS}")
  if(GRN_EMBED)
    add_library(h3_functions STATIC ${H3_SOURCES})
    set_target_properties(h3_functions PROPERTIES POSITION_INDEPENDENT_CODE ON)
  else()
    add_library(h3_functions MODULE ${H3_SOURCES})
    set_target_properties(h3_functions PROPERTIES PREFIX "" OUTPUT_NAME "h3")
    install(TARGETS h3_functions DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}")
    if(MSVC)
      install(
        FILES $<TARGET_PDB_FILE:h3_functions>
        DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}"
        OPTIONAL)
    endif()
  endif()
  target_link_libraries(h3_functions libgroonga)
endif()

if(GRN_WITH_LLAMA_CPP)
  set(LANGUAGE_MODEL_SOURCES language_model.c)
  set_source_files_properties(${LANGUAGE_MODEL_SOURCES}
                              PROPERTIES COMPILE_FLAGS "${GRN_C_COMPILE_FLAGS}")
  if(GRN_EMBED)
    add_library(language_model_functions STATIC ${LANGUAGE_MODEL_SOURCES})
    set_target_properties(language_model_functions
                          PROPERTIES POSITION_INDEPENDENT_CODE ON)
  else()
    add_library(language_model_functions MODULE ${LANGUAGE_MODEL_SOURCES})
    set_target_properties(language_model_functions
                          PROPERTIES PREFIX "" OUTPUT_NAME "language_model")
    install(TARGETS language_model_functions
            DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}")
    if(MSVC)
      install(
        FILES $<TARGET_PDB_FILE:language_model_functions>
        DESTINATION "${GRN_FUNCTIONS_PLUGIN_DIR}"
        OPTIONAL)
    endif()
  endif()
  target_link_libraries(language_model_functions libgroonga)
endif()
