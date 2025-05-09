/*
  Copyright(C) 2009-2017  Brazil
  Copyright(C) 2019-2021  Sutou Kouhei <kou@clear-code.com>

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

#ifdef __cplusplus
extern "C" {
#endif

typedef uint32_t grn_expr_flags;

#define GRN_EXPR_SYNTAX_QUERY          (0x00)
#define GRN_EXPR_SYNTAX_SCRIPT         (0x01)
#define GRN_EXPR_SYNTAX_OUTPUT_COLUMNS (0x20)
#define GRN_EXPR_SYNTAX_ADJUSTER       (0x40)
#define GRN_EXPR_SYNTAX_SORT_KEYS      (0x100)
/* Deprecated since Groonga 11.0.2. Use GRN_EXPR_SYNTAX_SORT_KEYS instead. */
#define GRN_EXPR_SYNTAX_GROUP_KEYS     GRN_EXPR_SYNTAX_SORT_KEYS
#define GRN_EXPR_SYNTAX_OPTIONS        (0x200)
#define GRN_EXPR_ALLOW_PRAGMA          (0x02)
#define GRN_EXPR_ALLOW_COLUMN          (0x04)
#define GRN_EXPR_ALLOW_UPDATE          (0x08)
#define GRN_EXPR_ALLOW_LEADING_NOT     (0x10)
#define GRN_EXPR_QUERY_NO_SYNTAX_ERROR (0x80)
#define GRN_EXPR_DISABLE_PREFIX_SEARCH (0x400)
#define GRN_EXPR_DISABLE_AND_NOT       (0x800)

GRN_API grn_obj *
grn_expr_create(grn_ctx *ctx, const char *name, unsigned int name_size);
GRN_API grn_rc
grn_expr_close(grn_ctx *ctx, grn_obj *expr);
GRN_API grn_obj *
grn_expr_add_var(grn_ctx *ctx,
                 grn_obj *expr,
                 const char *name,
                 unsigned int name_size);
GRN_API grn_obj *
grn_expr_get_var(grn_ctx *ctx,
                 grn_obj *expr,
                 const char *name,
                 unsigned int name_size);
GRN_API grn_obj *
grn_expr_get_var_by_offset(grn_ctx *ctx, grn_obj *expr, unsigned int offset);
GRN_API grn_rc
grn_expr_clear_vars(grn_ctx *ctx, grn_obj *expr);

GRN_API void
grn_expr_take_obj(grn_ctx *ctx, grn_obj *expr, grn_obj *obj);

GRN_API grn_obj *
grn_expr_append_obj(
  grn_ctx *ctx, grn_obj *expr, grn_obj *obj, grn_operator op, int nargs);
GRN_API grn_obj *
grn_expr_append_const(
  grn_ctx *ctx, grn_obj *expr, grn_obj *obj, grn_operator op, int nargs);
GRN_API grn_obj *
grn_expr_append_const_str(grn_ctx *ctx,
                          grn_obj *expr,
                          const char *str,
                          unsigned int str_size,
                          grn_operator op,
                          int nargs);
/* Deprecated since Groonga 11.0.1. Use grn_expr_append_const_int32() instead.
 */
GRN_API grn_obj *
grn_expr_append_const_int(
  grn_ctx *ctx, grn_obj *expr, int value, grn_operator op, int nargs);
GRN_API grn_obj *
grn_expr_append_const_int32(
  grn_ctx *ctx, grn_obj *expr, int32_t value, grn_operator op, int nargs);
GRN_API grn_obj *
grn_expr_append_const_bool(
  grn_ctx *ctx, grn_obj *expr, bool value, grn_operator op, int nargs);
GRN_API grn_obj *
grn_expr_append_const_float32(
  grn_ctx *ctx, grn_obj *expr, float value, grn_operator op, int nargs);
GRN_API grn_obj *
grn_expr_append_const_float(
  grn_ctx *ctx, grn_obj *expr, double value, grn_operator op, int nargs);
GRN_API grn_rc
grn_expr_append_op(grn_ctx *ctx, grn_obj *expr, grn_operator op, int nargs);

/**
 * \brief Extract keywords from an expression.
 *
 * For example usage:
 * ```c
 *  grn_obj keywords;
 *  GRN_TEXT_INIT(&keywords, GRN_OBJ_VECTOR);
 *  // You don't need to unlink keyword because it is owned by expr.
 *  grn_expr_get_keywords(ctx, expr, &keywords);
 *  {
 *    size_t i, n_keywords;
 *    n_keywords = grn_vector_size(ctx, &keywords);
 *    for (i = 0; i < n_keywords; i++) {
 *      const char *keyword_content;
 *      size_t keyword_size;
 *      keyword_size = grn_vector_get_element(ctx,
 *                                            &keywords,
 *                                            i,
 *                                            &keyword_content,
 *                                            NULL,
 *                                            NULL);
 *      // Use keyword_content and keyword_size.
 *    }
 *  }
 *  GRN_OBJ_FIN(ctx, &keywords);
 * ```
 *
 * \param ctx The context object.
 * \param expr The expression object from which keywords will be extracted.
 * \param keywords The keywords container where the extracted keywords will be
 *                 be stored. Each extracted keyword's domain is
 *                 \ref GRN_DB_TEXT.
 *
 * \return \ref GRN_SUCCESS on success, the appropriate \ref grn_rc on error.
 */
GRN_API grn_rc
grn_expr_get_keywords(grn_ctx *ctx, grn_obj *expr, grn_obj *keywords);

/**
 * \brief Escape target characters in a query by a specified escape character.
 *
 * \note For general query syntax escaping, it is recommended to use
 *       \ref grn_expr_syntax_escape_query instead.
 *
 * \param ctx The context object. Its encoding must match that of the input
 *            \p query.
 * \param query The input query to be escaped.
 * \param query_size The byte size of \p query. A value of -1 indicates that
 *                   the query is null-terminated.
 * \param target_characters A null-terminated string containing the characters
 *                          to be escaped. For example, `"+-><~*()\"\\:"` is
 *                          used for query syntax.
 * \param escape_character The character to use for escaping characters found
 *                         in \p target_characters. For example, `"\\"`
 *                         (backslash) is used.
 * \param escaped_query The buffer where the escaped query is stored.
 *
 * \return \ref GRN_SUCCESS on success, the appropriate \ref grn_rc on error.
 */
GRN_API grn_rc
grn_expr_syntax_escape(grn_ctx *ctx,
                       const char *query,
                       int query_size,
                       const char *target_characters,
                       char escape_character,
                       grn_obj *escaped_query);
/**
 * \brief Escape special characters in a query.
 *
 * \param ctx The context object. Its encoding must match that of the input
 *            \p query. It is used for allocating buffer for \p escaped_query.
 * \param query The input query to be escaped.
 * \param query_size The byte size of \p query. A value of -1 indicates that
 *                   the query is null-terminated.
 * \param escaped_query The buffer where the escaped query is stored.
 *
 * \return \ref GRN_SUCCESS on success, the appropriate \ref grn_rc on error.
 *
 * \see
 * https://groonga.org/docs/reference/grn_expr/query_syntax.html
 */
GRN_API grn_rc
grn_expr_syntax_escape_query(grn_ctx *ctx,
                             const char *query,
                             int query_size,
                             grn_obj *escaped_query);
GRN_API grn_rc
grn_expr_syntax_expand_query(grn_ctx *ctx,
                             const char *query,
                             int query_size,
                             grn_expr_flags flags,
                             grn_obj *expander,
                             grn_obj *expanded_query);
GRN_API grn_rc
grn_expr_syntax_expand_query_by_table(grn_ctx *ctx,
                                      const char *query,
                                      int query_size,
                                      grn_expr_flags flags,
                                      grn_obj *term_column,
                                      grn_obj *expanded_term_column,
                                      grn_obj *expanded_query);

GRN_API grn_rc
grn_expr_compile(grn_ctx *ctx, grn_obj *expr);
GRN_API grn_obj *
grn_expr_rewrite(grn_ctx *ctx, grn_obj *expr);
GRN_API grn_rc
grn_expr_dump_plan(grn_ctx *ctx, grn_obj *expr, grn_obj *buffer);
GRN_API grn_obj *
grn_expr_exec(grn_ctx *ctx, grn_obj *expr, int nargs);

GRN_API grn_obj *
grn_expr_alloc(grn_ctx *ctx, grn_obj *expr, grn_id domain, unsigned char flags);

#define GRN_EXPR_CREATE_FOR_QUERY(ctx, table, expr, var)                       \
  do {                                                                         \
    if (((expr) = grn_expr_create((ctx), NULL, 0)) &&                          \
        ((var) = grn_expr_add_var((ctx), (expr), NULL, 0))) {                  \
      GRN_RECORD_INIT((var), 0, grn_obj_id((ctx), (table)));                   \
    } else {                                                                   \
      (var) = NULL;                                                            \
    }                                                                          \
  } while (0)

GRN_API grn_rc
grn_expr_parse(grn_ctx *ctx,
               grn_obj *expr,
               const char *str,
               unsigned int str_size,
               grn_obj *default_column,
               grn_operator default_mode,
               grn_operator default_op,
               grn_expr_flags flags);
uint32_t
grn_expr_get_n_codes(grn_ctx *ctx, grn_obj *expr);

GRN_API grn_obj *
grn_expr_snip(grn_ctx *ctx,
              grn_obj *expr,
              int flags,
              unsigned int width,
              unsigned int max_results,
              unsigned int n_tags,
              const char **opentags,
              unsigned int *opentag_lens,
              const char **closetags,
              unsigned int *closetag_lens,
              grn_snip_mapping *mapping);
GRN_API grn_rc
grn_expr_snip_add_conditions(grn_ctx *ctx,
                             grn_obj *expr,
                             grn_obj *snip,
                             unsigned int n_tags,
                             const char **opentags,
                             unsigned int *opentag_lens,
                             const char **closetags,
                             unsigned int *closetag_lens);

GRN_API unsigned int
grn_expr_estimate_size(grn_ctx *ctx, grn_obj *expr);

GRN_API grn_rc
grn_expr_set_query_log_tag_prefix(grn_ctx *ctx,
                                  grn_obj *expr,
                                  const char *prefix,
                                  int prefix_len);
GRN_API const char *
grn_expr_get_query_log_tag_prefix(grn_ctx *ctx, grn_obj *expr);

GRN_API grn_rc
grn_expr_set_parent(grn_ctx *ctx, grn_obj *expr, grn_obj *parent);
GRN_API grn_obj *
grn_expr_get_parent(grn_ctx *ctx, grn_obj *expr);

GRN_API grn_rc
grn_expr_set_condition(grn_ctx *ctx, grn_obj *expr, grn_obj *condition);
GRN_API grn_obj *
grn_expr_get_condition(grn_ctx *ctx, grn_obj *expr);

#ifdef __cplusplus
}
#endif
