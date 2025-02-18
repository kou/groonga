/*
  Copyright (C) 2015-2018  Brazil
  Copyright (C) 2018-2024  Sutou Kouhei <kou@clear-code.com>

  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License as published by the Free Software Foundation; either
  version 2.1 of the License, or (at your option) any later version.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this library; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
*/

#pragma once

#include <groonga/option.h>

#ifdef __cplusplus
extern "C" {
#endif

/* Just for backward compatibility. Use grn_obj_is_true() instead. */
#define GRN_OBJ_IS_TRUE(ctx, obj, result)                                      \
  do {                                                                         \
    result = grn_obj_is_true(ctx, obj);                                        \
  } while (0)

GRN_API bool
grn_obj_is_true(grn_ctx *ctx, grn_obj *obj);

GRN_API bool
grn_obj_is_temporary(grn_ctx *ctx, grn_obj *obj);

/**
 * \brief Check whether a Groonga built-in object is or not.
 *
 * \param ctx The context object.
 * \param obj The target object to check.
 *
 * \return `true` if the object is a built-in Groonga object, `false` otherwise.
 */
GRN_API bool
grn_obj_is_builtin(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_bulk(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_text_family_bulk(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_number_family_bulk(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_maybe_record_bulk(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_vector(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_text_family_vector(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_number_family_vector(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_weight_vector(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_uvector(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_weight_uvector(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_db(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_table(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_table_with_key(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_table_with_value(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_lexicon(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_lexicon_without_data_column(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_tiny_hash_table(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_patricia_trie(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_result_set(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_column(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_number_family_column(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_scalar_column(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_text_family_scalar_column(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_number_family_scalar_column(grn_ctx *ctx, grn_obj *obj);
/**
 * \brief Check whether the specified object is a vector column or not.
 *
 * \param ctx The context object.
 * \param obj The target object to check.
 *
 * \return `true` if the object is a vector column, `false` otherwise.
 */
GRN_API bool
grn_obj_is_vector_column(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_text_family_vector_column(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_weight_vector_column(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_reference_column(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_data_column(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_index_column(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_id_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_key_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_value_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_score_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_referable_score_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_nsubrecs_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_max_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_min_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_sum_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_avg_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_mean_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_column_value_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_scalar_accessor(grn_ctx *ctx, grn_obj *obj);
/**
 * \brief Check whether a text family scalar accessor or not.
 *
 * \param ctx The context object.
 * \param obj The target object to check.
 *
 * \return `true` if the object is an accessor of \ref
 *         GRN_DB_SHORT_TEXT range table or \ref GRN_DB_SHORT_TEXT /
 *         \ref GRN_DB_TEXT / \ref GRN_DB_LONG_TEXT scalar column,
 *         `false` otherwise.
 */
GRN_API bool
grn_obj_is_text_family_scalar_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_number_family_scalar_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_vector_accessor(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_type(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_text_family_type(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_proc(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_tokenizer_proc(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_function_proc(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_selector_proc(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_selector_only_proc(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_applier_proc(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_normalizer_proc(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_token_filter_proc(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_scorer_proc(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_window_function_proc(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_aggregator_proc(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_expr(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_visible(grn_ctx *ctx, grn_obj *obj);
GRN_API grn_rc
grn_obj_set_visibility(grn_ctx *ctx, grn_obj *obj, bool is_visible);
GRN_API bool
grn_obj_have_source(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_token_column(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_generated_column(grn_ctx *ctx, grn_obj *obj);

GRN_API grn_rc
grn_obj_reindex(grn_ctx *ctx, grn_obj *obj);

GRN_API void
grn_obj_touch(grn_ctx *ctx, grn_obj *obj, grn_timeval *tv);
GRN_API uint32_t
grn_obj_get_last_modified(grn_ctx *ctx, grn_obj *obj);
GRN_API bool
grn_obj_is_dirty(grn_ctx *ctx, grn_obj *obj);

GRN_API const char *
grn_obj_set_flag_to_string(int flags);

GRN_API const char *
grn_obj_type_to_string(uint8_t type);
GRN_API bool
grn_obj_type_is_table(uint8_t type);
GRN_API bool
grn_obj_type_is_column(uint8_t type);

GRN_API bool
grn_obj_name_is_column(grn_ctx *ctx, const char *name, int name_len);

bool
grn_obj_is_empty(grn_ctx *ctx, grn_obj *obj, grn_id id);

GRN_API grn_bool
grn_obj_is_corrupt(grn_ctx *ctx, grn_obj *obj);
GRN_API size_t
grn_obj_get_disk_usage(grn_ctx *ctx, grn_obj *obj);

GRN_API grn_rc
grn_obj_set_option_values(grn_ctx *ctx,
                          grn_obj *obj,
                          const char *name,
                          int name_length,
                          grn_obj *values);
GRN_API grn_option_revision
grn_obj_get_option_values(grn_ctx *ctx,
                          grn_obj *obj,
                          const char *name,
                          int name_length,
                          grn_option_revision revision,
                          grn_obj *values);
GRN_API grn_rc
grn_obj_clear_option_values(grn_ctx *ctx, grn_obj *obj);

GRN_API grn_rc
grn_obj_to_script_syntax(grn_ctx *ctx, grn_obj *obj, grn_obj *buffer);

GRN_API grn_rc
grn_obj_warm(grn_ctx *ctx, grn_obj *obj);

#ifdef __cplusplus
}
#endif
