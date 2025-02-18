/*
  Copyright(C) 2015-2016  Brazil
  Copyright(C) 2021  Sutou Kouhei <kou@clear-code.com>

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

#include "grn_expr.h"

#ifdef __cplusplus
extern "C" {
#endif

typedef struct _grn_scaner {
  grn_obj *expr;
  grn_obj *source_expr;
  scan_info **sis;
  uint32_t n_sis;
} grn_scanner;

grn_scanner *
grn_scanner_open(grn_ctx *ctx,
                 grn_obj *expr,
                 grn_operator op,
                 bool record_exist);
void
grn_scanner_close(grn_ctx *ctx, grn_scanner *scanner);

#ifdef __cplusplus
}
#endif
