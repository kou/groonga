# Copyright(C) 2012-2018  Brazil
# Copyright(C) 2023  Sutou Kouhei <kou@clear-code.com>
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

set(QUERY_EXPANDERS_DIR "${GRN_RELATIVE_PLUGINS_DIR}/query_expanders")
read_file_list(${CMAKE_CURRENT_SOURCE_DIR}/tsv_sources.am TSV_SOURCES)
set_source_files_properties(${TSV_SOURCES} PROPERTIES COMPILE_FLAGS
                                                      "${GRN_C_COMPILE_FLAGS}")
if(GRN_EMBED)
  add_library(tsv_query_expander STATIC ${TSV_SOURCES})
  set_target_properties(tsv_query_expander PROPERTIES POSITION_INDEPENDENT_CODE
                                                      ON)
else()
  add_library(tsv_query_expander MODULE ${TSV_SOURCES})
  set_target_properties(tsv_query_expander PROPERTIES PREFIX "" OUTPUT_NAME
                                                                "tsv")
  install(TARGETS tsv_query_expander DESTINATION "${QUERY_EXPANDERS_DIR}")
  if(MSVC)
    install(
      FILES $<TARGET_PDB_FILE:tsv_query_expander>
      DESTINATION "${QUERY_EXPANDERS_DIR}"
      OPTIONAL)
  endif()
endif()
target_link_libraries(tsv_query_expander libgroonga)
