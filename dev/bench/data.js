window.BENCHMARK_DATA = {
  "lastUpdate": 1764140386284,
  "repoUrl": "https://github.com/kou/groonga",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "09bbf7ea2b074f33ae86164a8fdf44263be4e237",
          "message": "14",
          "timestamp": "2025-10-05T10:31:07+09:00",
          "tree_id": "f2e32f3fd62ac7d8b747e2def65792e7ee020d6b",
          "url": "https://github.com/kou/groonga/commit/09bbf7ea2b074f33ae86164a8fdf44263be4e237"
        },
        "date": 1759628371376,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3897685110000566,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020866999999999844 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27389597599994886,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01421299999999992 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015816113999960635,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004140000000000532 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01541330600002766,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003779999999998229 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.411785113999997,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015999999999999348 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2350157550000631,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006877000000000147 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1337851029999797,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005771000000000082 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01649200600002132,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014229999999997578 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016729939000015293,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015070000000000916 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0627971129999878,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006816000000000141 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07229026699997121,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006953999999999544 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017717649000019264,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014480000000007542 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02611921999994138,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014879999999997118 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "1d5614108c89d00ad268a04cb2bd77aaa1779551",
          "message": "Add ShortBinary/Binary/LargeBinary\n\nThis is an experimental feature.\n\n* `load`, `dump` and `select --output_columns` are only supported.\n* Apache Arrow input isn't tested. It may not work.\n  * We need to improve grntest for Apache Arrow input with binary\n    value.\n* MessagePack output isn't tested. It may not work.\n* XML output isn't tested. It may not work.\n* TSV output isn't tested. It may not work.\n* Use base64 in JSON.\n* Use base64 in grn_inspect().\n* Use Apache Arrow's base64 implementation as fallback.",
          "timestamp": "2025-10-05T10:49:51+09:00",
          "tree_id": "0822b39c8c3529cc89d67fd1550b60c80b94c8c3",
          "url": "https://github.com/kou/groonga/commit/1d5614108c89d00ad268a04cb2bd77aaa1779551"
        },
        "date": 1759629990536,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3818396240000652,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020366999999999885 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26691532699999243,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013857000000000064 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016028773000016372,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038299999999993894 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024576758999955928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003959999999996189 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4380544729999656,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00034700000000009723 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2368310220000467,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006025000000000155 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13447712700002512,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007423999999999903 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016545712000038293,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013469999999999316 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016568172000006598,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017309999999999826 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06414803000006941,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006690000000000168 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07082520100004785,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007303000000000726 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018130815999995775,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016359999999996933 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017604701999914596,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014820000000000388 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "a87227e7018471333566c12c67cf55167869d69b",
          "message": "Add path",
          "timestamp": "2025-10-06T09:42:32+09:00",
          "tree_id": "10f7b4895884dcf6467ca456bf1316c76ff12186",
          "url": "https://github.com/kou/groonga/commit/a87227e7018471333566c12c67cf55167869d69b"
        },
        "date": 1759711762391,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38060984000003373,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01916599999999996 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27399579799964613,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015563999999999745 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016035920000263104,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034699999999995845 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015327559000070323,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00032899999999938534 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4865183210000623,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000190000000000079 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24596710100001928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0061530000000000334 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13850735099993017,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0057919999999997696 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01670782300004703,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014859999999998486 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017224800000008145,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001687000000000105 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0692620560001842,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008492000000000013 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07160968399978174,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00803399999999968 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017530138999973133,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016030000000001599 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025951566999992792,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015400000000010683 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e178bd207da5dba4f255465d4ca2dc021af9093",
          "message": "Add ShortBinary/Binary/LargeBinary (#2554)\n\nThis is an experimental feature.\n\n* `load`, `dump` and `select --output_columns` are only supported.\n* Apache Arrow input isn't tested. It may not work.\n  * We need to improve grntest for Apache Arrow input with binary value.\n* MessagePack output isn't tested. It may not work.\n* XML output isn't tested. It may not work.\n* TSV output isn't tested. It may not work.\n* Use base64 in JSON.\n* Use base64 in grn_inspect().\n* Use Apache Arrow's base64 implementation as fallback.",
          "timestamp": "2025-10-06T09:26:50+09:00",
          "tree_id": "ab1a4d760399e5dbc33b75540092e0b7928aa903",
          "url": "https://github.com/kou/groonga/commit/3e178bd207da5dba4f255465d4ca2dc021af9093"
        },
        "date": 1759716312511,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36070720899977005,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016457999999999945 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2712442210000745,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01498899999999967 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01624894800011134,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045099999999975715 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024550314999828515,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039900000000045455 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5842278960000158,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016400000000016401 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23865993199990498,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007197000000000203 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13347297499990418,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006185999999999997 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01691867099987121,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015120000000001521 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.018169118999935563,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001603000000000021 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06402200599984553,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006668000000000118 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06971772899987627,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006698999999999011 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01749072300003718,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014480000000002546 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01741316899983758,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016790000000003191 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "6607dd6f5414899cf6bd610dbf09b419a4b6347b",
          "message": "tokenizer-h3-index: use tag",
          "timestamp": "2025-10-06T12:15:12+09:00",
          "tree_id": "00265ab7b1991d4c74c6df4ca8a40f38580f5962",
          "url": "https://github.com/kou/groonga/commit/6607dd6f5414899cf6bd610dbf09b419a4b6347b"
        },
        "date": 1759723357216,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36053088100004516,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015274999999999872 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28170435299995233,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01816499999999982 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015218861999983346,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003740000000000965 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015229224000052,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041399999999966464 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.600807618000033,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018500000000010175 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23681101099998614,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007749000000000117 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13404275600009896,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006319999999999909 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016506535000075928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015200000000000213 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01645121299998209,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015410000000002366 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06736240300000418,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006988000000000133 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.073377482000069,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008565999999999463 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01794649000004256,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016810000000008762 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0263355470000306,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017209999999998615 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d5d5ec9450533bcb439dd5d3b9ee48bd8a433ae",
          "message": "ci benchmark: create the gh-pages branch automatically (#2553)",
          "timestamp": "2025-10-06T14:14:09+09:00",
          "tree_id": "39ddf8ea7901d708077c02c8b8481bf7c55d2516",
          "url": "https://github.com/kou/groonga/commit/4d5d5ec9450533bcb439dd5d3b9ee48bd8a433ae"
        },
        "date": 1759970912725,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.383385866000026,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02058600000000016 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2825660040000457,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018560999999999772 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015489704000003712,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004089999999999927 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015005758999990348,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003870000000003593 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3467968079999935,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017600000000014826 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23706526099994107,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0055930000000000285 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1307210189999637,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005334000000000005 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016544299999992518,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014730000000001409 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01648220399997058,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001415999999999945 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06638624499998969,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007603000000000026 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07247342700000559,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007366999999999513 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016471258000052558,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014890000000002956 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02307862300003194,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001381999999999911 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "c78adb2d339b2a714d4ad120bb385cd90299ade2",
          "message": "base64: suppress declaration-after-statement warnings\n\nMariaDB adds `-Wdeclaration-after-statement` explicitly.",
          "timestamp": "2025-10-09T09:46:40+09:00",
          "tree_id": "6f1f760f4ae4fc7c910c24096b14d2fa3d165a7b",
          "url": "https://github.com/kou/groonga/commit/c78adb2d339b2a714d4ad120bb385cd90299ade2"
        },
        "date": 1759971268572,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3801209040000799,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02050999999999986 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26662289000000783,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014075000000000282 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01633097300003783,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004149999999998599 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015085876999989978,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000332000000000221 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3833378809999886,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015199999999987446 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23450825500009387,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005902000000000032 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13771252700007608,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004933999999999994 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01699280700000827,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014690000000000536 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016509676999987732,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015119999999999856 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06583726599990314,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007201000000000124 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07244531200012716,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006719000000000475 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01781980100003011,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00162000000000051 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0172981649999997,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017069999999994034 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "abe@clear-code.com",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb83ebfc7faca4b7e1a31a4dd0a92fafac4aaa7f",
          "message": "ci package: Get the repository name from `GITHUB_REPOSITORY` (#2556)\n\nIn CI, it tries to push the Docker image to `groonga/groonga` even for a\nforked repository, and it fails.\nBy using `ENV['GITHUB_REPOSITORY']`, it will push the Docker image to\nthe correct repository.",
          "timestamp": "2025-10-09T09:50:17+09:00",
          "tree_id": "4a700665a108a68cd36daed05f7a924a82730974",
          "url": "https://github.com/kou/groonga/commit/cb83ebfc7faca4b7e1a31a4dd0a92fafac4aaa7f"
        },
        "date": 1760001603607,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3703971900000056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01794299999999989 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28824239899989834,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019226999999999217 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015448596000055659,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033999999999959063 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01520135699996672,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003809999999999647 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3758460419999778,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017500000000000848 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23477505700003576,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007902999999999938 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1322557459999416,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00565400000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016769632000034562,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015900000000002856 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.021698009000090224,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001489000000000018 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06352276099988785,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00699400000000007 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07179985800007671,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006414000000000225 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01662644499998578,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014719999999997513 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026373460999991494,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016669999999999185 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "af3ea9820867878e7494cf3fd7bd76f66ba66621",
          "message": "compressor: add\n\nIt abstracts compression routines for zlib, LZ4, Zstandard and Blosc2.\n\ngrn_ja uses this instead of raw zlib, LZ4, Zstandard and Blosc2 API.\n\ngrn_ja_reader is also changed but it may not work. We will revisit\nthis when we use grn_ja_reader. There is no grn_ja_reader user for\nnow. We need streaming API and cache API when we revisit this.\n\nThis is for adding new compression routine such as OpenZL and adding\nsupport for table key compression.",
          "timestamp": "2025-10-13T20:52:06+09:00",
          "tree_id": "9b4a785dc7f434e543ed00a92eaed6fe820c1934",
          "url": "https://github.com/kou/groonga/commit/af3ea9820867878e7494cf3fd7bd76f66ba66621"
        },
        "date": 1760356889310,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3815717760000439,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019597999999999838 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28214723399997865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015688000000000007 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014820440999983475,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037300000000012323 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014986556999986078,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003799999999998527 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4589530190000346,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016900000000016902 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24456584000017756,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007250999999999896 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14061515899993537,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00609100000000018 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01729428599998073,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001483000000000012 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016424692999976287,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014779999999999793 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06712407499992423,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006961000000000189 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07369573699998,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008254999999999846 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017529027000023234,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014909999999997425 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026387159999899268,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018479999999990726 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "ed81010735b7c6c6154bac0e649b142e0dcfe982",
          "message": "Add more macros for compressed value",
          "timestamp": "2025-10-13T22:34:31+09:00",
          "tree_id": "915bc48ba124732d5f6a7c9ef7804ffe7630b9d2",
          "url": "https://github.com/kou/groonga/commit/ed81010735b7c6c6154bac0e649b142e0dcfe982"
        },
        "date": 1760362838653,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3468675480000343,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01182800000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26491970699999,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010832999999999898 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016049355999939507,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003720000000000806 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013194911000027787,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003399999999996739 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6823027140000022,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016399999999983095 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21231794900006662,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007361999999999966 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11920093999998471,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005551000000000028 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01697672099993497,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014420000000003874 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014629416000047968,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014539999999994835 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0694255400000543,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007063999999999834 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06429757299991934,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008844000000000685 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01788788100009242,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013199999999997658 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028243699999904948,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015210000000000085 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "235c4fabbdd9f8b413074bec0f6de49ee3188ef2",
          "message": "Use length for consistency",
          "timestamp": "2025-10-13T22:40:55+09:00",
          "tree_id": "3e594d04a87b2aa5025760978908f9e653348b0b",
          "url": "https://github.com/kou/groonga/commit/235c4fabbdd9f8b413074bec0f6de49ee3188ef2"
        },
        "date": 1760363405274,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.384977675000016,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018255999999999994 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27776070900000605,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014703999999999745 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015177386000004844,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003869999999996654 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01497385900000836,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003269999999998552 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7180959720000146,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019400000000002748 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24969307700001764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008296000000000067 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14260261599997648,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00677600000000006 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017738149999900088,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017789999999998363 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016557236000039666,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001645999999999842 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07211741800006166,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009548000000000362 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07445517399997925,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008760999999999936 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017582399000104942,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016090000000004434 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017169458000012128,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014139999999999986 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "d1b240715775c6c8aefd6085c938c8c8a614e0cd",
          "message": "clang-format: add lib/io.c",
          "timestamp": "2025-10-17T14:53:33+09:00",
          "tree_id": "e739bcd018468d1b17cd84b60c1566105dfa0354",
          "url": "https://github.com/kou/groonga/commit/d1b240715775c6c8aefd6085c938c8c8a614e0cd"
        },
        "date": 1760680797967,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36635408299997607,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017231000000000107 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2623086350000676,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012582000000000593 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016189489000055346,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037300000000028977 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015598156999999446,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003999999999997339 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5270666209999604,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017799999999995597 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2362709209999707,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0067960000000003296 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13743102399990903,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008895000000000403 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01768899900002907,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014579999999999593 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01705068800004028,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001730000000000259 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06556553299998313,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007105000000000264 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07361608699994804,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008534999999999404 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01723780000008901,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016330000000001066 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026569646999973884,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014520000000000088 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "a9d3a6aa0f4b06c2af734ca7d66afcdecc47d9b5",
          "message": "io: remove unused owner_ctx from mmap API",
          "timestamp": "2025-10-17T15:00:12+09:00",
          "tree_id": "4dd252b2175d16c3a331cf7db8c266b63cdc6470",
          "url": "https://github.com/kou/groonga/commit/a9d3a6aa0f4b06c2af734ca7d66afcdecc47d9b5"
        },
        "date": 1760681516133,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3748849749999863,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01836499999999988 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28803225400008614,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018776999999999877 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015750377000244953,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045600000000001195 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015214628999956403,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000360000000000138 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.584608516000003,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00036699999999972865 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2500016520001509,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008633000000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14231167599996297,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005990999999999941 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01681289399994057,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016099999999998893 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016986042999974416,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016030000000003264 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07158713499995883,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008651999999999813 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07696235599996726,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0088079999999994 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01736970099989321,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001752000000000642 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017967219000070145,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001777000000000195 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f50455b7e54c851a9a58da15e1be64b270f7bc60",
          "message": "io: remove unused owner_ctx from mmap API (#2566)",
          "timestamp": "2025-10-17T15:01:25+09:00",
          "tree_id": "4dd252b2175d16c3a331cf7db8c266b63cdc6470",
          "url": "https://github.com/kou/groonga/commit/f50455b7e54c851a9a58da15e1be64b270f7bc60"
        },
        "date": 1760682192128,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37490151499997637,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0154610000000001 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28564346799993245,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016886999999999652 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015617319999876145,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041500000000002646 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024251936999974077,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004219999999998947 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4418191009999646,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019499999999994522 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25443079500013255,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0076309999999999295 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14024277000009988,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005038999999999683 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016915766999886728,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001441999999999749 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016774644000065564,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014299999999999868 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06726969100003544,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0076240000000002695 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07181514200010497,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006858000000000031 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01716166599993585,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00154499999999963 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019744674000094165,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015500000000001068 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "538d8af04b312cbf00faa8e6d1375da29efc9161",
          "message": "io: use grn_io_mmap for grn_mmap()/grn_unmap()\n\nWe don't want to use `HANDLE` as `grn_mmap()`/`grn_munmap()` argument.",
          "timestamp": "2025-10-17T16:31:04+09:00",
          "tree_id": "7f741da43c1dbcbee66eb70e31b8da2584a235da",
          "url": "https://github.com/kou/groonga/commit/538d8af04b312cbf00faa8e6d1375da29efc9161"
        },
        "date": 1760686657868,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3707773230003113,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01829800000000026 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28604549299961946,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019159000000000315 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015265750000025946,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034100000000014674 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015469840999912776,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004039999999998489 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4852536710000095,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016700000000000048 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2265351539999756,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007562999999999875 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12705108200020732,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0051059999999996525 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016389295000180937,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015259999999999163 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01654990600036399,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001470999999999778 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07095830200046294,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007247000000000142 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.08239549999984774,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009468000000000837 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01890821899974071,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015360000000002039 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.03164640499994675,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016249999999997655 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "a2cc45714a26f0c332df7486d8b1aa4d620719d7",
          "message": "io: use grn_io_mmap for grn_mmap()/grn_unmap()\n\nWe don't want to use `HANDLE` as `grn_mmap()`/`grn_munmap()` argument.",
          "timestamp": "2025-10-17T16:41:41+09:00",
          "tree_id": "d82146b026b7bfd26d7e51e84a87d0252bb7e277",
          "url": "https://github.com/kou/groonga/commit/a2cc45714a26f0c332df7486d8b1aa4d620719d7"
        },
        "date": 1760687324402,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3636558630000195,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01995699999999996 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2590899699998772,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01385399999999988 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014882902000067588,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003510000000001845 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01501314399996545,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031199999999986794 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3774518409999814,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017699999999998273 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22254082999990032,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005824999999999997 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12633653299991465,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005161000000000138 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016842360000111967,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014849999999995145 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01652412800001457,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001663000000000081 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06537858100006133,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006058000000000313 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06952373600006467,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006818000000000102 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017646170000034545,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001607999999999582 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025330244999963725,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016149999999998388 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "4fc18f0e2289f66da9a2bb8b1dba02032b94400b",
          "message": "io: use grn_io_mmap for grn_mmap()/grn_unmap()\n\nWe don't want to use `HANDLE` as `grn_mmap()`/`grn_munmap()` argument.",
          "timestamp": "2025-10-17T16:56:54+09:00",
          "tree_id": "4cd6dca07e4d85f47402db995eb0d1d7ac7db94b",
          "url": "https://github.com/kou/groonga/commit/4fc18f0e2289f66da9a2bb8b1dba02032b94400b"
        },
        "date": 1760688781388,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35306944600000634,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01801900000000016 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.25893619599995077,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014263999999999943 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015551552999966134,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043999999999980166 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01548611800004096,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042899999999979066 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.512668218000016,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019600000000016826 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22517124999998828,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007046999999999998 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12882399000005762,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007158999999999888 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01651175400002103,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015100000000000113 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017058636999990995,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001595999999999903 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06625374700001885,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007135999999999906 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0758248520000393,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008263000000000742 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017241967999979124,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015540000000009435 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026098670000038737,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015539999999996112 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "bb99efe9e7e7b1193b48f8e1a302898b554547f7",
          "message": "io: use grn_io_mmap for grn_mmap()/grn_unmap()\n\nWe don't want to use `HANDLE` as `grn_mmap()`/`grn_munmap()` argument.",
          "timestamp": "2025-10-17T16:57:53+09:00",
          "tree_id": "26cbc3dd8ed101b6fab6cee35d44a2df5fd4b48f",
          "url": "https://github.com/kou/groonga/commit/bb99efe9e7e7b1193b48f8e1a302898b554547f7"
        },
        "date": 1760689260820,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.386844392000512,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.026628000000000096 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26872349400082385,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01719699999999992 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01562487000001056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004599999999996829 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01593276700077695,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043300000000012773 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5699189360002492,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014700000000023028 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2247099809997053,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006499999999999603 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1293899069996769,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006274999999999642 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016578398999627098,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014930000000004107 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016630366999834223,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014979999999998883 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06879998100157536,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00680299999999949 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07311820599898056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008092999999999906 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017798277999645506,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016749999999999543 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02707239200026379,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002020000000000438 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "28b57985ad188d274be33f8e7f22ba2456be5b63",
          "message": "io: use grn_io_mapinfo for grn_mmap()/grn_unmap()\n\nWe don't want to use `HANDLE` as `grn_mmap()`/`grn_munmap()` argument.",
          "timestamp": "2025-10-17T18:26:18+09:00",
          "tree_id": "28cb2edc9d62a828ccc07b894f4872949ac6366e",
          "url": "https://github.com/kou/groonga/commit/28b57985ad188d274be33f8e7f22ba2456be5b63"
        },
        "date": 1760693859178,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3875218660000428,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.03119800000000021 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2704453410002543,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01753199999999966 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016452073999971617,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042799999999992844 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01589515499983918,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003599999999996384 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8709999900000867,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002420000000000755 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23242652199996883,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010100999999999763 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13384902999996484,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008928999999999992 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01809295800012478,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014890000000002124 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01738945099987177,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015179999999993532 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07305427899996175,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008402000000000548 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07837104100008219,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009639000000000036 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018680185999869536,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016640000000003874 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018910796999875856,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001943999999999918 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "d446bc92e35983b2195489e49acdb3279cdc6ef7",
          "message": "clang-format: add lib/grn_util.h",
          "timestamp": "2025-10-18T16:33:53+09:00",
          "tree_id": "09e0189f9f0d04ffcecef9ed7457d61108021b0c",
          "url": "https://github.com/kou/groonga/commit/d446bc92e35983b2195489e49acdb3279cdc6ef7"
        },
        "date": 1760773549104,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37614898400011043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02061700000000022 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.3146259900001951,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02631699999999998 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016519440000138275,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005510000000004123 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024922634000176913,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0006839999999998236 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.9357160380000096,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00023799999999998822 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25562524999986636,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010156000000000165 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14807224599962865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00916500000000009 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.018412012999988292,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002452000000000343 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.018180075000373108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00261199999999992 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07415818800041052,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008370999999999601 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07626567200009049,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00922899999999996 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01886439200006862,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0023580000000003876 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01860205199977827,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002279999999999449 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4c1c0daf75520bc1f9ad0ec5fe8b5307f222448",
          "message": "clang-format: add lib/grn_util.h (#2570)",
          "timestamp": "2025-10-18T17:21:21+09:00",
          "tree_id": "f443de3bedad52409995917f9b58af32819b8a5c",
          "url": "https://github.com/kou/groonga/commit/d4c1c0daf75520bc1f9ad0ec5fe8b5307f222448"
        },
        "date": 1760777081910,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3737358630000358,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019121999999999917 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28503917000000456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0177799999999996 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015621931000055156,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040800000000040804 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014883381000061036,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004239999999997579 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.557845446999977,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016100000000013326 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24826369600009457,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007178000000000129 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14329420199999277,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007683999999999497 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01651201700008187,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014890000000003234 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02530020199998262,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015350000000007025 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06825367800001914,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008252000000000578 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07501111299995955,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008431000000000077 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017245985999920777,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015169999999995742 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017387625000083062,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015760000000001329 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "8e077a82a8efcebc51288c31d53d5db5c1012466",
          "message": "grn_path_copy: add",
          "timestamp": "2025-10-18T17:33:57+09:00",
          "tree_id": "aa807ab89d35f534cbd8517d521aad8f4eff550d",
          "url": "https://github.com/kou/groonga/commit/8e077a82a8efcebc51288c31d53d5db5c1012466"
        },
        "date": 1760777734219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3742411669999228,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018884999999999874 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27656804599996576,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015763999999999945 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015331953999975667,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003729999999998457 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014968207999970673,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041000000000057657 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6126186320000215,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020700000000006824 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24989864799994166,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011057000000000178 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14246223899982624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00709399999999985 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017034507000005306,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001584000000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016732628999989174,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016399999999998915 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07035439699996004,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007510999999999962 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07534847900001296,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009052000000000254 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017722275999915382,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016639999999999988 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019266244000050392,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016710000000000336 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "d1ecd65788ad7f99b293bc7b5ab66dd733a9efad",
          "message": "grn_path_copy: add",
          "timestamp": "2025-10-18T17:35:49+09:00",
          "tree_id": "03c0d0e97e0546919e9f9d8e7c3e6127c8d0504c",
          "url": "https://github.com/kou/groonga/commit/d1ecd65788ad7f99b293bc7b5ab66dd733a9efad"
        },
        "date": 1760779675311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38285449999989396,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020991999999999844 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27236247100017863,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014798999999999951 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01536079100014831,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004560000000002895 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01507471299964891,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037399999999998546 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5638168049999877,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019300000000005424 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24445419399989987,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006971000000000421 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14263130500035004,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00603699999999982 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01694180000004053,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017110000000000458 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016856045999929847,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015449999999997133 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06729339300045467,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007494000000000084 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07383650100018713,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008493000000000889 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018724233999819262,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001754999999999729 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01764547700008734,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001695000000000113 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "63c1bf66119940820bb9deec1d46fdc7b77a73fd",
          "message": "language-model: add support for download cache",
          "timestamp": "2025-10-18T17:59:40+09:00",
          "tree_id": "aad3770c020e2baf5ef5cacdde5efab1493f9eaa",
          "url": "https://github.com/kou/groonga/commit/63c1bf66119940820bb9deec1d46fdc7b77a73fd"
        },
        "date": 1760780190233,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37037044899994953,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01915500000000009 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29583466600001884,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02281700000000003 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014890043000036712,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042500000000034177 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.023991459000001214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004890000000001837 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5963590520000253,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019300000000005424 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24272460999992518,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006558999999999884 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1378922310000803,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004970000000000127 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017424261000030583,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016959999999998643 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016860210000004372,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018029999999998325 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06336861300002283,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006747999999999976 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07226059999999279,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0073950000000003735 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017951241999980994,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016410000000003644 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017264669000041977,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015989999999999616 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "f9651405677cac26a19714d570d0758902b54e5b",
          "message": "language-model: add support for download cache",
          "timestamp": "2025-10-18T19:51:59+09:00",
          "tree_id": "4fc4b22bff56fc28adf0d8e082e306b6808e9ae4",
          "url": "https://github.com/kou/groonga/commit/f9651405677cac26a19714d570d0758902b54e5b"
        },
        "date": 1760785036311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39660906200003865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.024362999999999968 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2805564360000403,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016275000000000178 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015565743999957249,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003970000000004248 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015297267000050851,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037300000000017874 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5077749149999704,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015799999999971392 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24304606800001238,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008231999999999892 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1384792129999255,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006122999999999851 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016342628000018067,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016540000000001276 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01687840599993251,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016329999999999123 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0648010920000388,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006622999999999601 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07499049500000865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008880000000000027 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017482826000048135,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015499999999998293 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02571656099996744,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001635999999999943 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "8c10cc5822edcc99407944437350a008e05c1936",
          "message": "language-model: add support for download cache",
          "timestamp": "2025-10-18T21:29:42+09:00",
          "tree_id": "7c9de786387e50d6f63687bd04dceb991bd522fe",
          "url": "https://github.com/kou/groonga/commit/8c10cc5822edcc99407944437350a008e05c1936"
        },
        "date": 1760791193983,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37378582999997434,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02030599999999988 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2776318890000198,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016344000000000664 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014622900000006211,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037599999999993194 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015120833000082712,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043099999999998695 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5390351750000946,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000262000000000151 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2445712679997314,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007448999999999956 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14336384000000635,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008330999999999894 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01662163199978295,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016790000000003746 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01694945000019743,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016919999999999435 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.069227433000151,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007609999999999964 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07601613799988627,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009466000000000446 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01828541200006839,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018810000000004656 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017480585000043902,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017150000000001608 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d8037b5d835c125653a361830f8e93e10eed7c4",
          "message": "language-model: add support for download cache (#2569)",
          "timestamp": "2025-10-18T22:34:23+09:00",
          "tree_id": "7c9de786387e50d6f63687bd04dceb991bd522fe",
          "url": "https://github.com/kou/groonga/commit/6d8037b5d835c125653a361830f8e93e10eed7c4"
        },
        "date": 1760796210604,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4031329980002738,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02813199999999974 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.30133689100102856,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.023096000000000422 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015864599000451562,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005229999999998569 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01522327500015308,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041800000000002946 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6061895289999484,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017199999999989446 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2437536250008634,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0077379999999999255 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14038395200032028,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0066120000000000345 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017522486999496323,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001670999999999867 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016575712999838288,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015629999999998145 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06890997499976947,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007788000000000017 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0722411869996904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0074960000000002525 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017181520999201894,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015820000000000278 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019360142999630625,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015849999999997255 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "90cf15de394ddd0428f8b2ccab53d329f80b0b37",
          "message": "ii builder: use GRN_PVECTOR for srcs",
          "timestamp": "2025-10-18T23:01:13+09:00",
          "tree_id": "b7fe73c85ebb67003838135eaf06af65ffd6c2c7",
          "url": "https://github.com/kou/groonga/commit/90cf15de394ddd0428f8b2ccab53d329f80b0b37"
        },
        "date": 1760798536946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3671042999998235,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020252000000000034 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2716947600001731,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01723999999999981 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015609284999754891,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034500000000026176 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015311548999875413,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040399999999940484 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4082092590000457,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015200000000012426 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23219607099997575,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006545000000000051 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13262973800021882,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005539999999999656 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01679083100009393,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001494999999999802 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017307018999872525,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018230000000002133 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06832705299996178,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007690000000000155 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07246245999976964,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007550999999999974 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017246184000100584,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016399999999995862 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01778532899993479,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016309999999998825 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "5fd36ce8c41d7ad025dbf4259eb225964b40c05a",
          "message": "ii builder: use GRN_PVECTOR for srcs",
          "timestamp": "2025-10-18T23:04:39+09:00",
          "tree_id": "d533ac8056222d8eff0b400d58b54d5edb5f958e",
          "url": "https://github.com/kou/groonga/commit/5fd36ce8c41d7ad025dbf4259eb225964b40c05a"
        },
        "date": 1760798588356,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36601248800002395,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020014000000000073 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26262320500001124,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01425299999999996 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015677911999944172,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040999999999971615 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015146035999975993,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039699999999964763 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4735513249999599,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016399999999994197 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23679348000013078,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006559000000000009 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13277241499991987,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005770000000000608 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01753124999999045,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014240000000002029 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016700402999958897,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016769999999996787 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06475130500001569,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006779999999999481 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07082774699995298,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006641999999999648 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016950218999966182,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015220000000008005 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017291358000022683,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014910000000001589 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6813abf89e5f284babdf7f3d8e6bbd5d8e98ac96",
          "message": "ii builder: use GRN_PVECTOR for srcs (#2572)",
          "timestamp": "2025-10-19T00:33:11+09:00",
          "tree_id": "d533ac8056222d8eff0b400d58b54d5edb5f958e",
          "url": "https://github.com/kou/groonga/commit/6813abf89e5f284babdf7f3d8e6bbd5d8e98ac96"
        },
        "date": 1760851043021,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3851003279999077,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.025680999999999815 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26234185100020113,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015344000000000052 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016105015000107414,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004109999999999392 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015473849000045448,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003809999999998259 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6461955539999735,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020700000000001273 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23587009400000625,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008391999999999802 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13523614700011422,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007001999999999953 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016661652000038885,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001649999999999957 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.0259351620002235,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017250000000001708 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0698431549998304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00823100000000021 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07590064600015012,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0075270000000003945 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017871108000008462,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018740000000005141 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026592847000188158,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001870999999999956 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "4b8aba01d1165158eb01bd3c37603ef7f4df2d9c",
          "message": "language-model: fix batch vectroization\n\nWe need to set correct `llama_context_params::n_seq_max` when we\nprocess multiples sequences at once.",
          "timestamp": "2025-10-19T16:21:42+09:00",
          "tree_id": "c008665dddbb67adba41ff8918f02a5d9eea2056",
          "url": "https://github.com/kou/groonga/commit/4b8aba01d1165158eb01bd3c37603ef7f4df2d9c"
        },
        "date": 1760859018227,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3539473249999219,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019756999999999983 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.278141780999988,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019100000000000283 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01562428999994836,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036300000000011323 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01243522599992275,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003900000000003345 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4239107259999741,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016600000000013826 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23075620100007654,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007465999999999889 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13499801599999728,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005761000000000155 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016830193000089366,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016930000000000556 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01668191599998181,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016279999999999628 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07107822999984137,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008048999999999779 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0713891980000767,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007593999999999768 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018418725999936214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001539999999999736 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026388111000017034,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001601999999999798 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "d93cc7da7792b9adb59a407a3532d14d25a16bfe",
          "message": "memory-map: add a new mmap() abstraction layer\n\nI wanted to reuse the existing mmap() abstraction layer in `lib/io.c`\nbut it was difficult to extract...\n\nThis is still a naive implementation. The Windows part isn't tested,\noffset isn't forced to align with page size and so on... We'll improve\nthem later.",
          "timestamp": "2025-10-21T09:24:31+09:00",
          "tree_id": "a725ca9d98e85ee7ce686603ac2df0ebf226e7d8",
          "url": "https://github.com/kou/groonga/commit/d93cc7da7792b9adb59a407a3532d14d25a16bfe"
        },
        "date": 1761007000405,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35788265500008265,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01746400000000012 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.262901055000043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012992000000000156 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015610496000022067,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034300000000020425 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015303727999992134,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005390000000000672 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3966136980000101,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001719999999998667 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22863174000002573,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006548000000000109 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13875683699990304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005658000000000468 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016511822999973447,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015290000000000026 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016606619999947725,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014710000000000834 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06747717799993325,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00660199999999965 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06996365499992407,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006952999999999737 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017930847000059202,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001494999999999802 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02612367000000404,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014539999999997333 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "eee2b8d2c80b043b7883388dd98752a6efe674e0",
          "message": "memory-map: add a new mmap() abstraction layer\n\nI wanted to reuse the existing mmap() abstraction layer in `lib/io.c`\nbut it was difficult to extract...\n\nThis is still a naive implementation. The Windows part isn't tested,\noffset isn't forced to align with page size and so on... We'll improve\nthem later.",
          "timestamp": "2025-10-21T09:42:26+09:00",
          "tree_id": "3a8141dd04ccabf1db37230de75845f772120ec8",
          "url": "https://github.com/kou/groonga/commit/eee2b8d2c80b043b7883388dd98752a6efe674e0"
        },
        "date": 1761007600215,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36537581199996794,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018795000000000034 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2641078059999131,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012661999999999951 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014885314000025573,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033099999999963714 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015326498000035826,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003100000000007541 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4432388980000042,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017900000000001248 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.227763528999958,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006429999999999797 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1393127370000684,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006566999999999934 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017658477999930255,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001652000000000181 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016599935000044752,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001467000000000107 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06587353700001586,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008037999999999976 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07317795500000557,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006932999999999967 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01714420500002234,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001439000000000079 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.021426996999991843,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015449999999999353 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "a3aec71257a9fd92ec1e7efc187473515309d052",
          "message": "memory-map: add a new mmap() abstraction layer\n\nI wanted to reuse the existing mmap() abstraction layer in `lib/io.c`\nbut it was difficult to extract...\n\nThis is still a naive implementation. The Windows part isn't tested,\noffset isn't forced to align with page size and so on... We'll improve\nthem later.",
          "timestamp": "2025-10-21T09:43:22+09:00",
          "tree_id": "23e96d88283cc83dea3f31e115dd18b6b8ee4aa9",
          "url": "https://github.com/kou/groonga/commit/a3aec71257a9fd92ec1e7efc187473515309d052"
        },
        "date": 1761007798396,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36080894400015495,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017924000000000162 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26709589600017125,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014049999999999674 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015412337999975989,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003259999999998542 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015157722000026297,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036700000000022825 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6414553379999575,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017100000000008775 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2270096669999475,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005563999999999986 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13647934199985912,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005954999999999808 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01684632099988903,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015440000000001008 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016931698999997025,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016480000000002049 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06730152899984887,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006645999999999985 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07249684999999317,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007078000000000584 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01724491100009118,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013990000000003722 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.022805598999980248,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001471000000000472 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "af23993f6e31acb750ebc17a89dfbbd81603783c",
          "message": "memory-map: add a new mmap() abstraction layer\n\nI wanted to reuse the existing mmap() abstraction layer in `lib/io.c`\nbut it was difficult to extract...\n\nThis is still a naive implementation. The Windows part isn't tested,\noffset isn't forced to align with page size and so on... We'll improve\nthem later.",
          "timestamp": "2025-10-21T09:46:31+09:00",
          "tree_id": "689f7b4603359bd9f3b6eec25ec472824d05a4f7",
          "url": "https://github.com/kou/groonga/commit/af23993f6e31acb750ebc17a89dfbbd81603783c"
        },
        "date": 1761007997294,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.363972356999966,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019756000000000093 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2804790360000027,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017828999999999567 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.02139219500000422,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004190000000000027 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015189102999983106,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004499999999998394 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4660291780000136,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015200000000020752 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2298025200000211,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006552000000000072 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13748530499998424,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005882000000000068 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016587818999937554,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015869999999999496 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016373810000004596,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014380000000000503 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06586841899996898,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006489999999999857 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0724490929999888,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007420000000000371 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017038972999955604,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016569999999999918 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02614822200001754,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014130000000001086 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "2e62dd9de72d95ae5f087f4e60337df443b8ff45",
          "message": "memory-map: add a new mmap() abstraction layer\n\nI wanted to reuse the existing mmap() abstraction layer in `lib/io.c`\nbut it was difficult to extract...\n\nThis is still a naive implementation. The Windows part isn't tested,\noffset isn't forced to align with page size and so on... We'll improve\nthem later.",
          "timestamp": "2025-10-21T09:47:18+09:00",
          "tree_id": "f27a833a0e3aee67a554100ae3ba6624f7dfef9b",
          "url": "https://github.com/kou/groonga/commit/2e62dd9de72d95ae5f087f4e60337df443b8ff45"
        },
        "date": 1761008962286,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3532282319999922,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016833000000000237 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26474019599982057,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012840000000000129 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0155260049999697,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003630000000000022 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024396785999954318,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004029999999994871 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4618601920000174,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019700000000016926 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2290244619999271,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005904999999999966 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13846191200002522,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00649699999999967 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016675693000081537,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013559999999994687 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016505694000045423,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001417000000000057 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06159620900001528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0061579999999999 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0699815520000584,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006800000000000167 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01779479200001788,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015519999999999146 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01759744899999305,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016170000000000628 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "5623e82743f5b045c9d574f490a4104d92059d81",
          "message": "memory-map: add a new mmap() abstraction layer\n\nI wanted to reuse the existing mmap() abstraction layer in `lib/io.c`\nbut it was difficult to extract...\n\nThis is still a naive implementation. The Windows part isn't tested,\noffset isn't forced to align with page size and so on... We'll improve\nthem later.",
          "timestamp": "2025-10-21T10:12:10+09:00",
          "tree_id": "02bfac0d305053863db13eae6519e11bc64d72d1",
          "url": "https://github.com/kou/groonga/commit/5623e82743f5b045c9d574f490a4104d92059d81"
        },
        "date": 1761011286550,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.34760259499995527,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01507999999999976 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2640374179999867,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012406999999999974 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015564543000039066,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037099999999998245 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015136161000043558,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003399999999995629 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4292335430000094,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000186000000000075 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22619334100005517,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007167999999999952 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13758825299993305,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005255999999999705 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016250932999980705,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016610000000001623 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01666514700002608,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016129999999998923 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06353516699999773,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006397999999999876 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07170066399999087,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007346999999999659 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016922578000048816,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016159999999997288 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017270428999950127,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016409999999997815 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50e002fb37e23457e66155933644bc1a2a4f8d23",
          "message": "memory-map: add a new mmap() abstraction layer (#2574)\n\nI wanted to reuse the existing mmap() abstraction layer in `lib/io.c`\nbut it was difficult to extract...\n\nThis is still a naive implementation. The Windows part isn't tested,\noffset isn't forced to align with page size and so on... We'll improve\nthem later.",
          "timestamp": "2025-10-21T10:46:27+09:00",
          "tree_id": "02bfac0d305053863db13eae6519e11bc64d72d1",
          "url": "https://github.com/kou/groonga/commit/50e002fb37e23457e66155933644bc1a2a4f8d23"
        },
        "date": 1761012784248,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3603716530000156,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017455000000000054 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27716133200004833,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014559999999999948 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015724243000136084,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037500000000000033 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014952908999930514,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041199999999995407 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.411581754999986,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002229999999998622 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22968565600007196,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007929000000000061 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13713572900007875,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005789000000000155 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01612131600001021,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014779999999998128 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017303644000037366,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015819999999998335 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06828462900000432,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006272999999999876 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07291466999998875,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007254999999999984 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017311783000025116,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016080000000001926 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017439360999958353,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015979999999999606 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "fffeb48de8fb8750e6f813e7e41673d9ec944d99",
          "message": "language-model: fix typos",
          "timestamp": "2025-10-21T10:48:05+09:00",
          "tree_id": "a63dbf610ab826ead7fb79df0bd345ff6a783915",
          "url": "https://github.com/kou/groonga/commit/fffeb48de8fb8750e6f813e7e41673d9ec944d99"
        },
        "date": 1761016034672,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3487486199999239,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015854000000000007 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27356776200008426,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014036999999999633 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015145621000101528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036599999999961663 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015465739000092071,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003959999999998409 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.567957094999997,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015300000000031955 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23031684200020663,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009255999999999903 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13991205899992565,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007272000000000306 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01722803200027556,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016909999999999148 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017195287999811626,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00159100000000012 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06845118799992633,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007188000000000222 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07502459600027578,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008564000000000432 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017885595999928228,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016660000000002784 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02699842799995622,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017299999999998428 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80d757c9904e4e8569ba2a2246632d42078106a0",
          "message": "language-model: fix typos (#2575)",
          "timestamp": "2025-10-21T10:49:05+09:00",
          "tree_id": "a63dbf610ab826ead7fb79df0bd345ff6a783915",
          "url": "https://github.com/kou/groonga/commit/80d757c9904e4e8569ba2a2246632d42078106a0"
        },
        "date": 1761016805678,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3516167769999754,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01613999999999957 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28969404000002896,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016629000000000338 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015585141999991947,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003900000000004178 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.017143635000024915,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040200000000020775 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7186785099999895,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000153000000000042 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23088431999997283,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00907300000000004 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13892471700000897,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007445999999999869 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016309719000020095,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016940000000004451 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01723314600002368,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020979999999998777 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07106281799994463,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008071999999999718 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07570919999992043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006891999999999954 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01785737599999493,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016209999999998725 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02673146599997267,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016650000000002219 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "bcf0efd1490b09af7aca677306ee5bfae2b28ec9",
          "message": "ii: fix wrong function name",
          "timestamp": "2025-10-21T10:51:08+09:00",
          "tree_id": "da6b850d86f46766fb7049d32ec8c8b7be77bbbf",
          "url": "https://github.com/kou/groonga/commit/bcf0efd1490b09af7aca677306ee5bfae2b28ec9"
        },
        "date": 1761017178783,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36743754900010117,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020310000000000106 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28417912499992326,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018635000000000013 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01573609100006479,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004979999999999429 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01556283800005076,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039599999999995195 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7226925709999819,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015899999999968717 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23314398600001596,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00840800000000004 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13896554200005085,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00742199999999954 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017042172000060418,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016140000000002264 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.018055543000002672,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018779999999997965 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06647656100005861,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007662000000000349 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.077376428999969,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008798999999999751 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017689185999927304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001576999999999995 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026908601999934945,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018640000000000323 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "1d7b25a9c20b30b6c71507f333525974275a517b",
          "message": "language-model: don't use ggml_backend_load_all_from_path() with system llama.cpp\n\nWe use it for bundled llama.cpp. We install ggml backends in custom\nlocation for bundled llama.cpp.",
          "timestamp": "2025-10-21T10:55:29+09:00",
          "tree_id": "f07423b5750c41f43a50e357d80c27b46e89538b",
          "url": "https://github.com/kou/groonga/commit/1d7b25a9c20b30b6c71507f333525974275a517b"
        },
        "date": 1761018075457,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3676365540000006,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02008100000000021 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29218848100015293,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01923100000000008 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016280054999924687,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045699999999970764 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015399731000002248,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004020000000002355 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7567650720000074,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017100000000019877 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2392885329999217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01070800000000005 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14059888899998896,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007445000000000035 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01684152200027711,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015519999999999978 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016477023999868834,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014759999999995888 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06946266799991463,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008159999999999876 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07746464800027297,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008307000000000148 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017076951999911216,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015099999999999558 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017762463000053685,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015810000000008317 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fee27a1f46239e7a3a2b666b882cfa3abe199f42",
          "message": "language-model: don't use ggml_backend_load_all_from_path() with system llama.cpp (#2577)\n\nWe use it for bundled llama.cpp. We install ggml backends in custom\nlocation for bundled llama.cpp.",
          "timestamp": "2025-10-21T11:01:28+09:00",
          "tree_id": "f07423b5750c41f43a50e357d80c27b46e89538b",
          "url": "https://github.com/kou/groonga/commit/fee27a1f46239e7a3a2b666b882cfa3abe199f42"
        },
        "date": 1761019572253,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35453024299999925,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015460000000000002 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26476049700005433,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012517999999999946 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015065444000072148,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035899999999966514 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01524111499998071,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037999999999999146 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4683388549999563,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017699999999998273 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2280796140000234,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007027000000000089 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13850386100000378,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005524999999999725 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016624228999944535,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001546999999999743 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016684425999983432,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015189999999999093 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06581103100006658,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007481999999999933 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07578080600006842,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007426000000000349 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017735153999979048,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015189999999999093 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02476343800003633,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015999999999997683 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "a5e97b3af3d2a540889e6598ce98c87ed2d4ebc3",
          "message": "language-model: don't disable GPU",
          "timestamp": "2025-10-21T11:04:11+09:00",
          "tree_id": "9399e7915d5963d6c853080e6204ab8451b599f2",
          "url": "https://github.com/kou/groonga/commit/a5e97b3af3d2a540889e6598ce98c87ed2d4ebc3"
        },
        "date": 1761021708241,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3786584609999579,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021996999999999794 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2939729279999881,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019783999999999774 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015530714000021817,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003309999999998592 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015577056000012135,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038699999999994295 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6245160230000124,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001759999999998707 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22938636999998607,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008671999999999666 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1388282350000054,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006999000000000283 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016840391999977555,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014230000000001741 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016759359000019458,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014049999999999896 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07024883999994813,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007498000000000282 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07672996000010812,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008771999999999613 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016796381000062865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016200000000004544 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.027087126999958855,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00216099999999958 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "c1a2478a35742191c204a01ce4349d7a16e24721",
          "message": "language-model: add `grn_language_model_get_n_embedding_dimensions()`",
          "timestamp": "2025-10-21T11:12:29+09:00",
          "tree_id": "5f4afa89488ce0f7d6735faa491e05fedd0f7ca3",
          "url": "https://github.com/kou/groonga/commit/c1a2478a35742191c204a01ce4349d7a16e24721"
        },
        "date": 1761023358830,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3690996450000057,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019325999999999746 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28057884400004696,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01609200000000008 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015509153000039078,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003860000000002195 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02458685100009461,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040100000000001246 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4804370509999671,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014199999999994772 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23158504200011976,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006962999999999914 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13839703200017084,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005711000000000077 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017271813000206748,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016089999999999993 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01683047699987128,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015610000000001456 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06914037600006395,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007877000000000273 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0744922259998475,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007363000000000203 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017158806999987064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016159999999998398 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017284928999856675,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016240000000001809 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "33b705805491abe4156f4f86ade411d226d723a6",
          "message": "grn_posting_open: use `grn_posting_internal` not `grn_posting`\n\nWe can use `grn_posting_set_weight_float()` in plugin by this.",
          "timestamp": "2025-10-21T11:06:44+09:00",
          "tree_id": "55692dee1424d0c6d8c9cd2c37cc38e381dd6ee8",
          "url": "https://github.com/kou/groonga/commit/33b705805491abe4156f4f86ade411d226d723a6"
        },
        "date": 1761023589195,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3806176559999699,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021943000000000046 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26576777399989737,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012405000000000055 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01567009699996902,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003140000000001475 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015605674999989105,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003729999999999567 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3969301099999996,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017099999999997673 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22832072399995695,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005743999999999971 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1372424450000267,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004773999999999834 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01734597099996904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014839999999999853 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016687740000008944,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014679999999999138 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06569751800003587,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006969999999999643 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07062578300008227,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007240000000000135 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017094714000052136,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015609999999999513 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017317531999992752,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015580000000005034 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "fae307759b99a1645d05234f09bd29260af5afdf",
          "message": "test language-model: use all-MiniLM-L6-v2\n\nBecause it's smaller and faster than bge-m3.",
          "timestamp": "2025-10-21T11:17:55+09:00",
          "tree_id": "909e5d610ea48dedb84ad49e2ce90526661535d2",
          "url": "https://github.com/kou/groonga/commit/fae307759b99a1645d05234f09bd29260af5afdf"
        },
        "date": 1761025197181,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.34930365999991864,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01506399999999991 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29204065999999784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019852999999999593 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014964371000019128,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003559999999996899 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015051263000032122,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003309999999998592 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4184725759999992,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014600000000000724 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22749520599995776,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006027999999999811 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13682142700008626,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005427999999999961 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01675355600008288,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014140000000000263 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016428892000021733,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001553000000000443 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06629112300009865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008236000000000146 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07031835600008662,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007022999999999613 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01762546899993822,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016029999999999378 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017132580999941638,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014750000000005592 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57f5f60ac70673318e93ea6c0f9577f4128a63b6",
          "message": "language-model: add `grn_language_model_get_n_embedding_dimensions()` (#2580)",
          "timestamp": "2025-10-21T11:29:23+09:00",
          "tree_id": "5f4afa89488ce0f7d6735faa491e05fedd0f7ca3",
          "url": "https://github.com/kou/groonga/commit/57f5f60ac70673318e93ea6c0f9577f4128a63b6"
        },
        "date": 1761026374845,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3584402209999098,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01638199999999991 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2697989149999671,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012590999999999991 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016015848999984428,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033600000000000296 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020983053000065865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003399999999995629 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.475393911000026,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021000000000012675 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22967066699993666,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006280000000000022 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13838242800005673,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005523 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017056956000033097,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001447999999999533 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.026085705000127746,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016269999999999896 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06646953599977223,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006857999999999781 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0727890699999989,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007396999999999487 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01725708899999745,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015099999999995117 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026631952000002457,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017130000000005474 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "f2092f360e5c8cf525d198989f7402e1ff7062d0",
          "message": "ii: set more token cursor metadata\n\nComplex tokenizers can use them.",
          "timestamp": "2025-10-21T12:00:03+09:00",
          "tree_id": "f5f3d5f2507104d95f85a31d416c5cab267498b4",
          "url": "https://github.com/kou/groonga/commit/f2092f360e5c8cf525d198989f7402e1ff7062d0"
        },
        "date": 1761028976729,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3526715610000224,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015554999999999833 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26501500299991676,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013097000000000053 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015550151999946138,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004150000000000542 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015410517999896456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004069999999993801 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6035417200000097,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018399999999996197 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2325977130000183,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008472999999999856 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14078980199997204,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007942999999999811 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016967097000076592,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016349999999999976 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.013853529000073195,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014179999999996973 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06814768500009905,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006933999999999829 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0747525409998957,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008073000000000469 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01742287000001852,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015570000000004747 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02663336200004096,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015899999999999803 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66116b2810c2ee358d7efbed1980eeb87f983c9d",
          "message": "grn_posting_open: use `grn_posting_internal` not `grn_posting` (#2579)\n\nWe can use `grn_posting_set_weight_float()` in plugin by this.",
          "timestamp": "2025-10-21T11:40:59+09:00",
          "tree_id": "b1d67dfca02ffae0500d140cee0ef08a6f0121dc",
          "url": "https://github.com/kou/groonga/commit/66116b2810c2ee358d7efbed1980eeb87f983c9d"
        },
        "date": 1761029921842,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38738653299998305,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022110999999999936 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2661926900000253,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012629999999999836 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016023498999970798,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035800000000016374 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015197916000033729,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033099999999963714 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4323860639999566,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016700000000025028 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23343340499991427,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007919000000000287 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14065954199998032,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006528000000000089 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016589857000099073,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015749999999999098 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016917080999860445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015550000000000008 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06930264599998281,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007571999999999968 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07684908999999607,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007547999999999694 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017327156000078503,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016340000000003851 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026719751999962682,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019239999999993707 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "367a5873f6b344666a5e5dabb18980a6f1db04a3",
          "message": "language-model: pass ctx for each function call\n\nIt's for pass error information to the correct ctx.",
          "timestamp": "2025-10-21T13:01:11+09:00",
          "tree_id": "b211bb45c166d39c000b12f4eb6cb68dfbcfe747",
          "url": "https://github.com/kou/groonga/commit/367a5873f6b344666a5e5dabb18980a6f1db04a3"
        },
        "date": 1761032514958,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3499070879999522,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015373000000000137 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26376621599996497,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012788000000000077 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015858283999989453,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003460000000004293 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015178929000057906,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037500000000012523 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.373986364000018,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017499999999970317 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23044018700005608,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006112999999999952 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13552800699994805,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004691999999999974 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017065150000007634,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014299999999999036 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01661369799995782,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015530000000001098 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0666687810000326,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007604999999999751 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06997782100000904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006617000000000012 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01750528699994902,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015779999999998018 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01765065600000071,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017029999999998713 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11333c9e63c1c3535356209aae2d834deb2f9f2b",
          "message": "ii: set more token cursor metadata (#2582)\n\nComplex tokenizers can use them.",
          "timestamp": "2025-10-21T13:49:53+09:00",
          "tree_id": "7e8474af35812d21a248c7bc1e80eff7c616ec7d",
          "url": "https://github.com/kou/groonga/commit/11333c9e63c1c3535356209aae2d834deb2f9f2b"
        },
        "date": 1761035358993,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35026753699997926,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015497999999999942 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26786892400008355,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013306000000000082 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015288990999977159,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003820000000001045 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015416969000057179,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039500000000014523 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4847804800000404,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021199999999987895 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22967294800002946,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0065499999999999725 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13634284099998695,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004935000000000106 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01654381700001295,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014909999999995205 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.020151416000032896,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00190599999999988 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0681618919999778,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007136999999999796 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07262226899996449,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007371000000000738 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01783606300006113,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017640000000004041 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01759683499994935,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015880000000001449 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "37a06fa4d4c79b0bb4dfcb77736dfaf8f9aed568",
          "message": "tokenizer: add missing `build` member",
          "timestamp": "2025-10-21T14:06:14+09:00",
          "tree_id": "6a00c198c7ef2847940c0a7e5813a5ab86881a2c",
          "url": "https://github.com/kou/groonga/commit/37a06fa4d4c79b0bb4dfcb77736dfaf8f9aed568"
        },
        "date": 1761037571198,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3795445800000721,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018745999999999888 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28554965299980495,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015371000000000051 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015901089000010415,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041799999999972415 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015580984999985503,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000348000000000237 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5205635280000251,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015900000000021453 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2432557279998946,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008231999999999906 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14005281699996885,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007361000000000284 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016859476999968592,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016599999999999115 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01660177400003704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014539999999996223 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06726968600003147,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006782000000000163 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07451785899996821,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008001000000000674 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018106203999934678,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015190000000004367 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024954486000069664,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017399999999994087 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98d0869563a3c5ceb6a2193bb809c2a42d3207ae",
          "message": "tokenizer: add missing `build` member (#2585)",
          "timestamp": "2025-10-21T14:07:33+09:00",
          "tree_id": "6a00c198c7ef2847940c0a7e5813a5ab86881a2c",
          "url": "https://github.com/kou/groonga/commit/98d0869563a3c5ceb6a2193bb809c2a42d3207ae"
        },
        "date": 1761039662190,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3853792240000189,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02274300000000004 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2998270699999921,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021049999999999625 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015730137999980798,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043099999999984817 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.0156019879999576,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000457000000000124 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6697922529999687,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015799999999968617 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23855056700000432,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008145000000000097 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13868232100008981,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0067519999999999525 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01771677700003238,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002022999999999997 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016977731999986645,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001819000000000015 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06689709299990909,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007538999999999713 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0798954399999161,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008636000000000088 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018110161999970842,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018439999999999013 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01379244200006724,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016960000000004194 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "09dcdb192af7188a159822456e413a22ef294485",
          "message": "language-model: fix too much tokens handling",
          "timestamp": "2025-10-21T14:55:05+09:00",
          "tree_id": "0ca7467d2c7d929e78f21128f87cee6aff914a6d",
          "url": "https://github.com/kou/groonga/commit/09dcdb192af7188a159822456e413a22ef294485"
        },
        "date": 1761042097311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3612051899998505,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013965999999999895 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2587696090001259,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01129200000000001 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01626477400003523,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035900000000010923 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021682115000146496,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00032999999999994145 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6725560320000454,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021000000000004349 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21369357100002162,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008151000000000089 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11964628999993465,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007335999999999829 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016105319999951462,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013039999999998747 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014377317000025869,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012729999999996355 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07103567200005045,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008137000000000047 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0649883259999342,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007234999999999617 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017631065000045965,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012700000000003264 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028085114999953475,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001344000000000234 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c68e27f45f9273c8958c22c86a196d693e1d61a4",
          "message": "language-model: fix too much tokens handling (#2586)\n\nWe can't vectorize tokens more than model's `n_ctx_train` in one\nvectorization. We need to split or truncate many tokens. This truncates\nmany tokens but splitting to sub chunks and merged them later may be\nbetter.",
          "timestamp": "2025-10-21T15:01:19+09:00",
          "tree_id": "0ca7467d2c7d929e78f21128f87cee6aff914a6d",
          "url": "https://github.com/kou/groonga/commit/c68e27f45f9273c8958c22c86a196d693e1d61a4"
        },
        "date": 1761043359774,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37456822399997236,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016998999999999792 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2765730420001091,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016122000000000136 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01586666400004333,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044299999999986017 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015470475999961764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038600000000019175 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.602568195999993,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021400000000001973 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2444397580001123,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006628000000000064 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13748111299980792,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006057000000000062 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017565311999987898,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001543999999999962 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01684146600001668,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015959999999999863 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06476876100003892,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006986999999999799 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07425551699992639,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006550000000000167 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01764197300002479,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001710000000000017 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.016963346999887108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015039999999997 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "baeee8d42e1b88b3ab20c35315b2390bcd70b5f6",
          "message": "language-model: add `grn_language_model_inferencer_vectorize_in_batch()`\n\nIt's an efficient version of\n`grn_language_model_inferencer_vectorize()`.",
          "timestamp": "2025-10-21T15:16:58+09:00",
          "tree_id": "c489906288a5d558156bbb3cfc2bdc7a5e60f7f1",
          "url": "https://github.com/kou/groonga/commit/baeee8d42e1b88b3ab20c35315b2390bcd70b5f6"
        },
        "date": 1761045851994,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37258565299976,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02085300000000001 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27581250600007934,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017353000000000562 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01624686000013753,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044999999999939533 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024986764999994193,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0006010000000002402 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.9423845239999764,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00027099999999999347 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24584994199983612,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009018000000000137 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13651068900003338,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0069620000000001625 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017496294000011403,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016090000000002769 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.026533399999948415,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016769999999997065 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0733057589998225,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010027000000000091 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0807823750001262,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009793000000000496 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01870941100003165,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018600000000003614 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018510447999915414,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0021570000000008527 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "1363548de579e34947862a37ffb335b46fdff593",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later. Bundled Faiss isn't supported yet.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-21T17:35:46+09:00",
          "tree_id": "345fbf8bf004a51465c0f6235de3fdfd6d8d8c32",
          "url": "https://github.com/kou/groonga/commit/1363548de579e34947862a37ffb335b46fdff593"
        },
        "date": 1761050713889,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38248259700003473,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019878999999999827 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29636126000002605,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02048400000000014 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015320236999968984,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003879999999997219 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.017078130999834684,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004070000000002405 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5322675370000525,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014799999999987046 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2408999739996034,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00675200000000005 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13949671399996078,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008339000000000069 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01727181700005076,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015709999999999336 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01715912700001354,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017349999999998755 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06541872899992995,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00748000000000007 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0739065270000765,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007857000000000447 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0180138230001603,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015200000000002434 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026307457999905637,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017699999999999383 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "e717236922e570e703f12c41404b75b81e1af9a5",
          "message": "ii: keep the original section to detect source\n\nIf input is a text vector, we use vector index as section. We can't\nuse it to detect source.",
          "timestamp": "2025-10-21T17:45:11+09:00",
          "tree_id": "b3dbd0091740ecd92c9e68b092144ebd02bb1917",
          "url": "https://github.com/kou/groonga/commit/e717236922e570e703f12c41404b75b81e1af9a5"
        },
        "date": 1761054387957,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38007849499985014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019233999999999918 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27122661599997855,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014246000000000092 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016388744000039424,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0006759999999999544 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015366260000007514,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000360000000000138 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7370931329999735,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001620000000001065 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24638050699996938,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0078029999999998795 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14017151499990632,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0061039999999998595 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016530184000032477,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015949999999998188 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016702844999997524,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015949999999999853 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07092000799997322,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009005000000000124 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0770999879999863,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009747999999999785 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01764374599997609,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016889999999994965 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024651363000032234,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016129999999996425 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "ac0968dfd59da8203d5a1a29ae0fae2cca12c9c3",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T11:32:34+09:00",
          "tree_id": "323270afced4cbd1eae7278776f05e4aefd30e3f",
          "url": "https://github.com/kou/groonga/commit/ac0968dfd59da8203d5a1a29ae0fae2cca12c9c3"
        },
        "date": 1761100847706,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38062746799988645,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01802699999999975 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27619102500005965,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015002000000000182 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015898014999947918,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038299999999980017 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01499772100004293,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034800000000070885 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6626438889999804,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017500000000000848 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24603662099997337,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0063690000000001246 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1388308570000163,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005760000000000376 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017009091000034005,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015450000000001018 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01723140600000761,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017979999999997442 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06713033599999108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007024000000000558 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07171600000009448,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007596999999999604 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017957929999965927,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015189999999999093 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017426250000028176,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015879999999999228 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "7a0772e3e58baff9701c50fd54df6506003a2cf0",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T11:43:15+09:00",
          "tree_id": "8e5763385a4d60969858f946f6a95a85b9280c39",
          "url": "https://github.com/kou/groonga/commit/7a0772e3e58baff9701c50fd54df6506003a2cf0"
        },
        "date": 1761102526360,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4034089809999841,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02256700000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2683035630000177,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012493000000000393 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014901909999935015,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033399999999958463 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015109987999835539,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003549999999999942 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4751935720000802,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018599999999985295 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24728248099995653,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007578999999999836 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14028526099980354,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006394999999999457 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01722893900011968,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014869999999999883 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016624520999926062,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014879999999997118 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07030406600006245,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00771700000000014 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07280698300007771,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00736300000000123 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017268702999899688,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014630000000010468 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02306427500002428,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014850000000006247 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "a7c6df06a292e3cc30258099bb953449d3f7fd70",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T11:43:58+09:00",
          "tree_id": "d41afda484f5abe531366017ac3f04ce0dfa2410",
          "url": "https://github.com/kou/groonga/commit/a7c6df06a292e3cc30258099bb953449d3f7fd70"
        },
        "date": 1761102639430,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38635643000020536,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01870900000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2823033040000382,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016325000000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015477063000162161,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003519999999998247 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015348883999990903,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00032500000000013074 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4592986509999264,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001759999999998707 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24515555700020286,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0058650000000001895 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1398605999997926,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006302999999999892 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016584778000151346,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014070000000001026 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016981867000140483,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015140000000000153 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06651328700002068,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006642000000000148 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07756004700024732,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007244999999999446 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018226117999915914,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001541999999999627 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026127711999947678,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015280000000001959 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "cfb08868333e483e8ccde68548d9e502c0321401",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T11:50:07+09:00",
          "tree_id": "c49a5f1e4d32cf3e873572544a64595e90ea993c",
          "url": "https://github.com/kou/groonga/commit/cfb08868333e483e8ccde68548d9e502c0321401"
        },
        "date": 1761102756264,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4017265220002173,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02307199999999965 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.270409157000131,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013411999999999813 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015440393000062613,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038899999999969515 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015166010000143615,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040599999999957337 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6837798110000222,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001910000000003298 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24919467500001247,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008352999999999874 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14187809100008053,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007630999999999999 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01734021100003247,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017899999999999583 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01713594299997112,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00189499999999998 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07028520799985927,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008239999999999678 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0784766200000604,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0081639999999997 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018263423999883344,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016670000000000018 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.020609562999879927,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020410000000000705 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "fa6b357c238f06505f75394655aa61389bb76714",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T12:56:16+09:00",
          "tree_id": "62c097cb0cadc85674d7de9314990c92fba0ba8d",
          "url": "https://github.com/kou/groonga/commit/fa6b357c238f06505f75394655aa61389bb76714"
        },
        "date": 1761106137754,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39103397400015183,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019808999999999882 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27354837599966686,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014029999999999862 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01632708099998581,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040099999999995695 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015511378000041987,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004030000000002365 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.443843367999989,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000184000000000073 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24592625400009638,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006158000000000136 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13881041699994512,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005086999999999703 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016974272999959794,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00160200000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016612421000104405,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00154100000000007 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06815697199999704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006960999999999898 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07285600800014436,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007062000000000124 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018042385999933686,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015810000000002766 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01693053999986205,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015329999999998123 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "d1d8a254b49a39a89b57322228420c15af90483c",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T12:57:40+09:00",
          "tree_id": "146f1e6bdffa0cd5e89e983e6ef52ee1838a4c17",
          "url": "https://github.com/kou/groonga/commit/d1d8a254b49a39a89b57322228420c15af90483c"
        },
        "date": 1761107256736,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3939883019999115,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020600000000000257 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.279861022000091,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015701000000000187 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.010105764999934763,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031899999999956963 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014885492000075828,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039100000000000246 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5285300760000382,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015199999999995772 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.247088045000055,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008139000000000104 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13784348300009697,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005822999999999939 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01760614999977861,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001498000000000027 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016423178999843913,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015450000000004072 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06786601900012101,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006774000000000058 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07296839300011015,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0077989999999991955 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01683618199990633,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001563999999999427 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017572780000023158,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017350000000002086 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "ffe78b0b2800dd6bad5f5ef79c284d8b45ac80af",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T13:03:17+09:00",
          "tree_id": "a3cba35d87617d8f53b314df887a137215b19932",
          "url": "https://github.com/kou/groonga/commit/ffe78b0b2800dd6bad5f5ef79c284d8b45ac80af"
        },
        "date": 1761107296041,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37980696400006764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017992000000000063 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2896888660000627,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01855300000000018 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015355429999885928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040100000000031777 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015191961999960313,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003900000000000292 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5094805609999753,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001819999999998767 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2457519069999421,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00581500000000007 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13749595800010184,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005360000000000281 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.0161951190000309,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013729999999999298 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.0164561270000263,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015809999999992774 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06482232399997656,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006686999999999527 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06964025100000981,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007164000000000337 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01687696899995217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014059999999997963 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026073334999978215,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00161699999999948 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "108e09e34bd8f9c2f0a7329b48eb5d6e0eab7cad",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T14:16:08+09:00",
          "tree_id": "2ae960badcf05b58e22177f9c8fd39fd8cce1344",
          "url": "https://github.com/kou/groonga/commit/108e09e34bd8f9c2f0a7329b48eb5d6e0eab7cad"
        },
        "date": 1761111040772,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3757835190002652,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015800000000000147 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2821287360000042,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0169030000000001 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015760680000084903,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003850000000000797 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014992486999858556,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033599999999989194 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6902769739999712,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00025199999999972467 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25434585200014226,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010919999999999527 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.140547727999774,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00681799999999988 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017401976999963154,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001520000000000049 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01728614599994671,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018170000000001796 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07189285599997675,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011178999999999772 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07893007699988175,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008225000000000593 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017860580000046866,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001695999999999892 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.021007395000083307,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017440000000008282 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "f3bcfedaf2b0617c81d9e03699b3849ab179284f",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T15:14:55+09:00",
          "tree_id": "5c365b06f6a66f240443b9dae7117fc15ca48ec5",
          "url": "https://github.com/kou/groonga/commit/f3bcfedaf2b0617c81d9e03699b3849ab179284f"
        },
        "date": 1761114024970,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39275691100004906,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017357000000000164 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2770578989998853,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015668999999999655 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015166847999978472,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003719999999998169 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014988516999949297,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003250000000000197 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4212111339999751,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018299999999996097 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2442953510000052,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0063630000000000075 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13678427600007126,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0055109999999995996 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01699381900004937,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013870000000002491 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016617084999950293,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014349999999997975 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06582013600001346,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009296000000000346 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07360546900008558,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009091000000000238 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017015952999997808,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016229999999990419 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025859761999981856,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016210000000003166 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "475eea6e0876008fc058f3ddeba85284af9bbb43",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T15:57:44+09:00",
          "tree_id": "f0beae63a57785468513afafdc9c6c0f157ef506",
          "url": "https://github.com/kou/groonga/commit/475eea6e0876008fc058f3ddeba85284af9bbb43"
        },
        "date": 1761116627037,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37787281599992184,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01713299999999998 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2961184870000011,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019528999999999935 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01528033600004619,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003370000000000317 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015115299999933995,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035899999999997045 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.554942337,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020600000000020602 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24728843200006168,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006832000000000005 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14172851600000058,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005928000000000155 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016356166999912602,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001474999999999782 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01702264900012551,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014790000000000914 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06535978900012651,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006886000000000253 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07307939300005728,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007808999999998817 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01773908999990681,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015330000000003396 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017467205999992075,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015180000000006577 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "75b422e366c46bf7ced868a4e1e5ed0a261649fe",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T16:01:57+09:00",
          "tree_id": "12798bb4e69dd920b1afa4e609c2da27c9f7869e",
          "url": "https://github.com/kou/groonga/commit/75b422e366c46bf7ced868a4e1e5ed0a261649fe"
        },
        "date": 1761117647286,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37537094200001775,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017217999999999872 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2722393980000106,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013504000000000516 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01588014299994711,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003980000000001205 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015415928999971129,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003319999999999712 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6292213579999952,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019600000000000173 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2508343820001073,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009582000000000063 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14302775300001258,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007725000000000204 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01692687700000306,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017210000000000003 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.018148806000056084,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020929999999996785 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06685696200003122,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008000999999999744 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0762937189999775,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009308000000000205 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01822906900002863,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001859000000000055 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01856609299994716,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002132000000000245 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "5e474352a31f3452bbe1a18b26079b85770f1b5a",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T16:49:07+09:00",
          "tree_id": "b8557d2bd050485f82bc67177c0e1431c5490e9c",
          "url": "https://github.com/kou/groonga/commit/5e474352a31f3452bbe1a18b26079b85770f1b5a"
        },
        "date": 1761120296077,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36941298199997163,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015623999999999569 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27144412199987755,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013454000000000271 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015041074999942339,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033199999999999896 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015085790000057386,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042100000000022675 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4666661520000162,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016799999999994597 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24587700900002574,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0075459999999997335 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1379068600000437,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00560099999999987 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016291018000003987,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014500000000001734 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.0167924269999844,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014320000000000166 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0679570059999719,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007366000000000358 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07243325400003187,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00747699999999954 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016758263999975043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014600000000000446 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01771052900005543,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017239999999996425 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "48f3f39a97a1878b73356d41b4cdc7c5ecbfb73a",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T17:34:22+09:00",
          "tree_id": "2096fc3537a184c53890082ed716c8eab0629574",
          "url": "https://github.com/kou/groonga/commit/48f3f39a97a1878b73356d41b4cdc7c5ecbfb73a"
        },
        "date": 1761123298057,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3700218619999305,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015865000000000434 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27719287700006134,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014949999999999714 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015103166999949735,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042300000000003446 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01565168900003755,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004360000000000752 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.657059371999992,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00024199999999996447 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24800824499999408,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008897999999999975 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1402257440000767,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00634299999999971 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016805703999921207,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001541999999999738 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016674986999987595,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001673000000000202 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06703685600007248,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007688000000000042 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07512067899995145,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006939000000000334 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018473549000077583,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018350000000006972 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024460270000020046,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015389999999999016 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "219765c1d5218d7913a6b5fa4cee0e7b15e3b8fc",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T17:38:47+09:00",
          "tree_id": "255b2304f75a1850b4909b09b61cbae6e4ba5ebd",
          "url": "https://github.com/kou/groonga/commit/219765c1d5218d7913a6b5fa4cee0e7b15e3b8fc"
        },
        "date": 1761123490635,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37600427599994646,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017774000000000206 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27888435400006983,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01593300000000014 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015087771999958477,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039100000000000246 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015221256999950583,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040199999999956937 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5774071290000506,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015399999999987646 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2476884659999996,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007523000000000224 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14376389000000245,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008803999999999729 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016796160999945187,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015599999999999226 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016566054999998414,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001602999999999799 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0637184729999376,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007473999999999981 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07368400199999314,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00856700000000013 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.00825465900004474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014439999999996955 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017621643999916614,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001574999999999438 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "53b7c92799a3734948e080916186b62cce633b3f",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T17:41:50+09:00",
          "tree_id": "5019ae50a4f56121aec43c9e5d70e1e562fbfe19",
          "url": "https://github.com/kou/groonga/commit/53b7c92799a3734948e080916186b62cce633b3f"
        },
        "date": 1761123629890,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38479176099997403,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018413999999999986 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29359517699998605,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019533999999999913 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015248274000043693,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003719999999999002 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015134507000027497,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040699999999982417 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.452523933000009,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001480000000000925 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24556092599999602,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007020999999999972 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14011997599999404,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006048000000000026 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01702282200000127,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014070000000004357 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.018529438999962622,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015909999999998703 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06572865499992986,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006291000000000532 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07204368499998282,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006027000000000032 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01646416699998099,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013770000000009885 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025872617000061382,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014739999999997533 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "2c47b648c2dbac8a366dc8165e46a6a3c745aa08",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-22T20:35:17+09:00",
          "tree_id": "3423840bdae63223545072d07130e338f959b785",
          "url": "https://github.com/kou/groonga/commit/2c47b648c2dbac8a366dc8165e46a6a3c745aa08"
        },
        "date": 1761133243009,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3959403969998334,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0208860000000005 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.267592375999925,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01325900000000016 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015335171999936392,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003770000000000717 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01511388400007263,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003329999999999167 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.57576523299997,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001849999999998242 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2475070659999119,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008482000000000045 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14148851400005924,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0066169999999998175 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016569613999990906,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015560000000000573 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01696561100004601,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015540000000003051 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06570554899991521,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070089999999998764 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07302466800001639,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007469999999999644 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017448983999997836,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014870000000005434 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.010617812999953458,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016929999999999168 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "9768ff475a5bc7872dec5eda53c5592c974dd376",
          "message": "Add support for RaBitQ based ANN search\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-23T09:26:18+09:00",
          "tree_id": "1f955c467a3506f171ed548b8f92763ec9e1c780",
          "url": "https://github.com/kou/groonga/commit/9768ff475a5bc7872dec5eda53c5592c974dd376"
        },
        "date": 1761179453564,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3710129120000829,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015325000000000213 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2800879739997981,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01564999999999976 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015442294999957085,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003689999999998417 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020908983000026637,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004450000000000287 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4157430459999887,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017300000000003424 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2439883860000691,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005380999999999983 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1380151029999297,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005173999999999845 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01654017499981819,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015009999999999746 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022006386000043676,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001599000000000128 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06639643400001205,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005957000000000379 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07245582699999886,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00630399999999981 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01677138399998057,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001510000000000039 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02062775199999578,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001469999999999888 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfca54810891681c8b10eb28917783a35066ec15",
          "message": "Add support for RaBitQ based ANN search (#2588)\n\nThis is an experimental feature. API and DB schema may be changed.\n\nThis is implemented as `language_model/knn` plugin but its name may be\nchanged.\n\nThis requires Faiss 1.12.0 or later. Bundled Faiss isn't supported yet.\n\nOR works but AND doesn't work.\n\nWe need to improve performance.\n\nWe'll add custom sorter later.",
          "timestamp": "2025-10-23T10:19:21+09:00",
          "tree_id": "1f955c467a3506f171ed548b8f92763ec9e1c780",
          "url": "https://github.com/kou/groonga/commit/cfca54810891681c8b10eb28917783a35066ec15"
        },
        "date": 1761185118503,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39779330000010305,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019761999999999877 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28533644100161837,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012763999999999998 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015215278000141552,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003739999999996524 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015431212999828858,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041000000000002146 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.54207845000019,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018500000000024053 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2480163990003348,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006889999999999966 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14165737099983744,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006436000000000636 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016392266000366362,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016359999999999708 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016466832000332943,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014360000000002426 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06565553199970964,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006706999999999935 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07276042299918117,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007754999999999096 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01699447099963436,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016390000000000293 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026084679000177857,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014670000000001626 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "56a6bb2cc51476a475b2f5e285cc6108bae68c60",
          "message": "Use system Faiss as much as possible\n\nBuilding bundled Faiss is difficult to use.",
          "timestamp": "2025-10-23T11:22:17+09:00",
          "tree_id": "dd754df6511a71eba2a3dabf755c3ea6e6f5f2a3",
          "url": "https://github.com/kou/groonga/commit/56a6bb2cc51476a475b2f5e285cc6108bae68c60"
        },
        "date": 1761187504024,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35302629600005275,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01337399999999983 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26627215999997134,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012821999999999834 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016283977000057348,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004970000000001917 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02638647799994942,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044400000000011097 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.908887940999989,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001750000000001195 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21696386700006087,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008848999999999968 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12186292700005197,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008637000000000172 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017520278000063172,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014670000000001487 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016054074999942713,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019660000000000233 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0715831530000628,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008705999999999867 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07004087199993592,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009116000000000221 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01957738200002268,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018139999999990802 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.029874459999973624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0022039999999998727 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "3bea9e8e5aeba2cc8f68a5f4a7eb963d06c81b29",
          "message": "Use system Faiss as much as possible\n\nBuilding bundled Faiss is difficult to use.",
          "timestamp": "2025-10-23T11:37:39+09:00",
          "tree_id": "ca5eb1218cf7c51d8d6e79fcc3f56f5bc031d28e",
          "url": "https://github.com/kou/groonga/commit/3bea9e8e5aeba2cc8f68a5f4a7eb963d06c81b29"
        },
        "date": 1761188755595,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37978920700004437,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01737099999999986 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27469406300002674,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014768000000000281 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015537034000033145,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003599999999999992 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015193121999971027,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031799999999954087 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4631447769999681,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016199999999996773 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24868859100007512,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00649100000000008 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13878808099997286,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005425999999999959 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016688926999961495,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015219999999998846 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016435158999911437,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015189999999998816 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06477182199989784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006817999999999741 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07089524599996366,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0073270000000001945 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01667519999995193,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013670000000000626 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01679541100008919,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014780000000003957 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "f77b5603161e201dc59127c10207fcb448566195",
          "message": "language-model-knn: fix wrong number of centroids in centroid searcher\n\n`options->centroids.size()` returns the number of all float values not\nthe number of centroids.",
          "timestamp": "2025-10-23T16:12:37+09:00",
          "tree_id": "ed4f8d8c015cc39877e8969fbf179ef26cfddec0",
          "url": "https://github.com/kou/groonga/commit/f77b5603161e201dc59127c10207fcb448566195"
        },
        "date": 1761204202287,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38565024299975903,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018646000000000024 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27243954000005033,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014256000000000157 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015630155999815543,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038500000000030177 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015180354999984047,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033700000000050356 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3875119900000072,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00013599999999999723 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2477631100000508,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008152999999999924 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13735116800012293,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005456000000000072 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01675768799987054,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017709999999999393 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01654160599991883,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016710000000001446 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.062147761999995055,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007104000000000235 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07094951199997013,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007013999999999854 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017612392999922122,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013250000000004647 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017443929000023672,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016419999999998103 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "522c5fb3c821336ecb9b7bcc8ae40edb6f90d523",
          "message": "Use system Faiss as much as possible\n\nBuilding bundled Faiss is difficult to use.",
          "timestamp": "2025-10-23T18:10:41+09:00",
          "tree_id": "955e59421683df0b237cb061e081f04d8e5ab331",
          "url": "https://github.com/kou/groonga/commit/522c5fb3c821336ecb9b7bcc8ae40edb6f90d523"
        },
        "date": 1761212855015,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3691006459999926,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01543100000000007 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2661742129999993,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012369999999999937 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015191817999948398,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036999999999998145 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015108245999954306,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003789999999999072 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4496343219999517,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014899999999998248 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24639815600016846,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005766999999999925 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1375556279998591,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00539899999999989 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016441851000081442,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013600000000006107 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01670586499994897,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001554999999999862 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06580449899979612,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0065959999999997965 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07313282100005836,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006413000000000252 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016995828999938567,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001487000000000016 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026643030999935036,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016059999999997188 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "56f2cdb6bc95684f8c5c1650c0bfbaa3897c6917",
          "message": "Use system Faiss as much as possible\n\nBuilding bundled Faiss is difficult to use.",
          "timestamp": "2025-10-23T18:19:33+09:00",
          "tree_id": "1eaa4f1a29dfcbe8bd332074dc4f3a7951d7778c",
          "url": "https://github.com/kou/groonga/commit/56f2cdb6bc95684f8c5c1650c0bfbaa3897c6917"
        },
        "date": 1761213363542,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38511316999995415,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019315999999999847 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26911380500007454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013271999999999867 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015028499000038664,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036999999999998145 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01502981099997669,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003140000000004528 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.430853974999991,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020799999999998597 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2498384500001407,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005082999999999907 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13930271199996014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0044840000000002656 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015666372000055162,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014189999999999758 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.015954477000036604,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013239999999996588 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0678096030000006,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006181999999999924 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06985816500002784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006276000000000642 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017526777999989918,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015919999999999823 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.021426231999953416,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014499999999999236 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "9c204288fb4dd6a527fc98bda31ab156f4c7fec0",
          "message": "Use system Faiss as much as possible\n\nBuilding bundled Faiss is difficult to use.",
          "timestamp": "2025-10-23T18:59:55+09:00",
          "tree_id": "2634f6d33afef2683565675a252c4d6d8a212c67",
          "url": "https://github.com/kou/groonga/commit/9c204288fb4dd6a527fc98bda31ab156f4c7fec0"
        },
        "date": 1761214792856,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3783250589999625,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018021999999999816 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26763513899999225,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014118999999999632 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015460865999955331,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000400000000000178 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.019785331000036877,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042800000000009497 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6930445070000246,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016899999999991921 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24801437000002124,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0082480000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1416892230000144,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008062999999999848 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01735203199996249,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019200000000000605 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.018011369999953786,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0022399999999998255 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06944686499991803,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00916899999999965 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07870596300000443,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009409 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018753700999980083,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0023890000000001133 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01824578800000154,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019870000000003774 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "53da501934560820071eede78c5cacef39e6c607",
          "message": "Use system Faiss as much as possible\n\nBuilding bundled Faiss is difficult to use.",
          "timestamp": "2025-10-23T22:33:10+09:00",
          "tree_id": "6689b20ba89a4c3b6273449bbf50d737f25d5916",
          "url": "https://github.com/kou/groonga/commit/53da501934560820071eede78c5cacef39e6c607"
        },
        "date": 1761226645047,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39088661399995317,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022049999999999834 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28419932699998185,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01667899999999989 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015547172000026421,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003830000000000222 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015093223999997463,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036599999999986643 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.430588302999979,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018499999999993522 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24318033899999136,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00594599999999984 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13600252400010504,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004480000000000012 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016801623000105792,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015179999999998806 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016681588000039937,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016339999999999688 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06622559600009481,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070270000000000055 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07714207899994108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008404999999999996 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017558210999993662,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015309999999997825 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017461812999954418,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015869999999999773 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "960f995a11f06ef48e2be3fdec0838fb3145b5ab",
          "message": "Use system Faiss as much as possible\n\nBuilding bundled Faiss is difficult to use.",
          "timestamp": "2025-10-23T22:42:42+09:00",
          "tree_id": "4925d35474ee47a134564ae03c7e679cf1f02f05",
          "url": "https://github.com/kou/groonga/commit/960f995a11f06ef48e2be3fdec0838fb3145b5ab"
        },
        "date": 1761227837523,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4082134079999946,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02236300000000009 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.30513945000001286,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020850000000000396 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015672497999958068,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003659999999994501 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015028331999985767,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040700000000001846 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6428818059999912,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017800000000001148 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24556651400004625,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006749000000000144 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13960742099996537,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005724000000000257 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01671200300000919,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015110000000003454 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01640667599997414,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001483999999999791 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06763241200002312,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007438999999999668 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07394824100003916,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007844999999999963 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.021382283000150437,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001807000000000114 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019401136999988466,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015429999999999333 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "a8b6b329436d7f987e573834a4215ac0ed70749c",
          "message": "Use system Faiss as much as possible\n\nBuilding bundled Faiss is difficult to use.",
          "timestamp": "2025-10-23T23:47:07+09:00",
          "tree_id": "c07017092ecb0326e4d5604aeaf70493025626da",
          "url": "https://github.com/kou/groonga/commit/a8b6b329436d7f987e573834a4215ac0ed70749c"
        },
        "date": 1761231073009,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36174414399977195,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013658000000000114 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2508404599998926,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009461999999999984 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01547814099990319,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031600000000031603 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02359083700002884,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003280000000000366 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6787093739999932,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014399999999992197 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2147468530000083,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00756800000000004 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11943458899992265,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007749000000000075 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017760791000057452,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001452999999999982 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01487318099998447,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001392000000000032 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06265724799993677,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007238000000000189 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0629754600000183,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0073189999999998395 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018457169999976486,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014470000000000177 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01526445099995044,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013130000000002168 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "c289a7255b7e4249db5c5ac2ea610d69620e8fc6",
          "message": "Use system Faiss as much as possible\n\nBuilding bundled Faiss is difficult to use.",
          "timestamp": "2025-10-24T00:23:08+09:00",
          "tree_id": "c10b9479e94de55dc6cc3c7c45ea8fb2354c275b",
          "url": "https://github.com/kou/groonga/commit/c289a7255b7e4249db5c5ac2ea610d69620e8fc6"
        },
        "date": 1761233234999,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38763982199964175,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020624999999999977 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27929145299992797,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015905000000000113 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015137429999981578,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041499999999983217 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015169165999964207,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003449999999998177 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6071675189999723,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016700000000025028 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24472863800008327,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0076469999999997235 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13658336500009227,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006450000000000067 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01629630599995835,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015939999999995957 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016586144999905628,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015790000000002191 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06418632899999466,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006880000000000233 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0716601339997851,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0075919999999989884 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01796559399997477,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017350000000002086 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02489905099992029,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015760000000002439 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "f78875cdb62d35b406326e60251c2d58d7187704",
          "message": "Use system Faiss as much as possible\n\nBuilding bundled Faiss is difficult to use.",
          "timestamp": "2025-10-24T06:12:49+09:00",
          "tree_id": "1659988177f29a49b577090105323b2d76662079",
          "url": "https://github.com/kou/groonga/commit/f78875cdb62d35b406326e60251c2d58d7187704"
        },
        "date": 1761254238725,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3849732370000538,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01993099999999995 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29692848399980676,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019744000000000095 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015080676999957632,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039399999999956137 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024163681999937126,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004440000000000832 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4196946750000166,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014899999999992697 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24471765599992068,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009320000000000064 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13853596100000232,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005918000000000034 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016346634999990783,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015699999999998493 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016705022000053305,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015420000000002931 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06506962700012764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006426999999999336 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0716269140000918,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007294999999999691 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01735162800002854,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00162900000000063 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0261985879999429,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014839999999995968 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e03e4435fe9fd544b1093990f48927fa8706dee2",
          "message": "Use system Faiss as much as possible (#2591)\n\nBuilding bundled Faiss is difficult to use.\n\nIf system Faiss is old, RaBitQ isn't used. Raw embeddings are used\ndirectly.",
          "timestamp": "2025-10-24T07:12:38+09:00",
          "tree_id": "1659988177f29a49b577090105323b2d76662079",
          "url": "https://github.com/kou/groonga/commit/e03e4435fe9fd544b1093990f48927fa8706dee2"
        },
        "date": 1761272486329,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37549784699990596,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016751000000000016 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26910403299962127,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012522999999999979 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0159491080000862,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034500000000015074 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015074042000151167,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003500000000002945 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4230954829999973,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016399999999999748 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24868255999967914,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070650000000001545 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13946653399989373,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005667000000000241 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01757099799988282,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001641999999999949 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016784781000069415,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016900000000000803 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06583528099986324,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006900000000000087 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06958911800029455,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007336999999999622 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017314530000021477,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015450000000000463 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02618359999974018,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015499999999994962 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "4542b8a8154dda20b02d1a0a5a486991aed6d863",
          "message": "language-model: fix N tokens and N sequences restriction\n\nN tokens must be multiple of N sequences.",
          "timestamp": "2025-10-24T17:18:51+09:00",
          "tree_id": "d39466bd545b79d341e9c68ea90d7a1dff1a0014",
          "url": "https://github.com/kou/groonga/commit/4542b8a8154dda20b02d1a0a5a486991aed6d863"
        },
        "date": 1761294260398,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3804218519999836,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017546999999999924 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2744379200000253,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014328000000000118 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015937880999956633,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038100000000018674 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015028221999955349,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003499999999998782 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4557900179999592,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021500000000002073 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24415323599998828,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006873000000000157 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14051354400004357,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00556600000000021 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01669129100008604,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00163499999999972 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.025632535000056578,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001615999999999923 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06489636300005941,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006689000000000847 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07254742600002828,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006448000000000176 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01745693400005166,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017100000000001558 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017386499999986427,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016699999999998105 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "13178fb8a31ace604ec11d7440e452f271af7b06",
          "message": "grn_expr_append_const_uint32: add a convenient function",
          "timestamp": "2025-10-24T18:28:18+09:00",
          "tree_id": "22ca7d6a51490b6162da125748a0e088cb6c9177",
          "url": "https://github.com/kou/groonga/commit/13178fb8a31ace604ec11d7440e452f271af7b06"
        },
        "date": 1761298539963,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.33868832199993903,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01215300000000015 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.25574031400003605,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010814000000000074 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016005449000033423,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003599999999996939 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013463024000031965,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037099999999948285 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7728117540000312,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018899999999999473 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21113443999996662,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009927999999999937 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12273724200002789,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007059000000000024 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.018578025999943293,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017370000000000163 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01448356299988518,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012879999999998726 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06435026799999832,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007386999999999963 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.059287257000050886,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007993000000000083 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.005353331000037542,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0010979999999994328 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.03414106200000333,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0022239999999996984 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "30f9c4d927cc8926950e320d1d4ad047ec69157b",
          "message": "language-model: fix N tokens and N sequences restriction\n\nN tokens must be multiple of N sequences.",
          "timestamp": "2025-10-24T18:41:05+09:00",
          "tree_id": "9fc2d3c842954a978ccb88b9b5696a07cfe36a45",
          "url": "https://github.com/kou/groonga/commit/30f9c4d927cc8926950e320d1d4ad047ec69157b"
        },
        "date": 1761299737304,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3684279299998252,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015224999999999905 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2710025220002308,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012739000000000125 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015571035999982996,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003749999999997644 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01489024600027733,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033099999999994245 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7000044999999773,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017600000000000948 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2464830469999697,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00749100000000015 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13954320699974687,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006196000000000104 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017076791999897978,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013839999999999686 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016969665000033274,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016529999999999045 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06319489399982103,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008649000000000268 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06333489600012854,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0077899999999992975 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017805444000146053,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017070000000003194 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01713889999996354,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001486000000000376 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "b60383cf2c31a7de5d5693f09c16ad8ef73bbccd",
          "message": "language-model-knn: make k optional\n\nBut options aren't parsed yet...",
          "timestamp": "2025-10-24T18:49:37+09:00",
          "tree_id": "0948b90b35d2f97d2a42dd1793f0c7754660e96e",
          "url": "https://github.com/kou/groonga/commit/b60383cf2c31a7de5d5693f09c16ad8ef73bbccd"
        },
        "date": 1761300297904,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3770830009999031,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017713000000000298 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2820200260001684,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016218999999999845 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01536486499998091,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003559999999998009 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015297197999927903,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042800000000023375 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5008463230000189,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003530000000000477 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2446456059999491,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007325999999999999 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13746693899992124,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0058649999999993985 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01635535699989532,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015570000000002526 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01664926200004402,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015540000000000553 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06172428699994725,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007256999999999514 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06467231199997059,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007040000000000629 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01750150600003053,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016519999999999868 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02457297500001232,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014540000000004272 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "e45d44a480599f54576d788e686c96cf6b4c6b75",
          "message": "language-model: fix N tokens and N sequences restriction\n\nN tokens must be multiple of N sequences.",
          "timestamp": "2025-10-24T18:51:05+09:00",
          "tree_id": "b2d2227c57e331a05d83d53a9010a3a31242029d",
          "url": "https://github.com/kou/groonga/commit/e45d44a480599f54576d788e686c96cf6b4c6b75"
        },
        "date": 1761300806576,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3716785169999639,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016499999999999848 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29965622499997835,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021229999999999832 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016064276000008704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003849999999994136 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015748825999992278,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003369999999996154 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4995818080000163,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003619999999998069 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24913496999994322,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00710900000000006 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13800159200013695,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005058999999999952 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.0169125130000225,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016260000000001273 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016484487000013814,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015590000000000603 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06492484699992929,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008166999999999786 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06576027799997064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007431000000000215 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016973084000028393,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017040000000002609 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025916631999962192,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001413999999999721 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5972df90995974d3be890d1145605491164ee2c3",
          "message": "language-model: fix N tokens and N sequences restriction (#2596)\n\nN tokens must be multiple of N sequences.",
          "timestamp": "2025-10-24T20:15:18+09:00",
          "tree_id": "92adc86cb2c2b3984b42c1c5fcae214054405793",
          "url": "https://github.com/kou/groonga/commit/5972df90995974d3be890d1145605491164ee2c3"
        },
        "date": 1761385275540,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35198081700002604,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014673999999999993 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2653318270001819,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01257900000000009 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015034422999974595,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031399999999992545 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015343336000114505,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003700000000006476 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3918037959999765,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021100000000012775 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23332708700013427,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007519000000000123 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13654924800016488,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005850000000000022 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016416212000081032,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016340000000003851 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016649477999976625,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015159999999999063 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06324551000022893,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007331999999999755 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06541598799992698,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007091000000000375 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016624527000089984,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001419999999999505 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01732275499989555,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014860000000003204 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "6655ffc8c4738f1f0bb13c50d3048e570b88d9c2",
          "message": "status: add `faiss` feature",
          "timestamp": "2025-10-25T20:44:52+09:00",
          "tree_id": "22418c4bb63b660873d92a48f2d3e8454a4d7731",
          "url": "https://github.com/kou/groonga/commit/6655ffc8c4738f1f0bb13c50d3048e570b88d9c2"
        },
        "date": 1761393174287,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3646036409999738,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018807000000000074 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28450216999993927,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018577999999999817 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016184489000011126,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035400000000002096 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015318409999963478,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003369999999997264 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5005487689999768,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00036099999999997245 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22351665500008266,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006100999999999787 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13116686699999036,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00622399999999973 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016162925999992694,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013779999999996573 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016907407000019248,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015579999999998095 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0646848610001598,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008660000000000168 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06959439999991446,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009411000000000086 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018037801999867042,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014879999999999616 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01795760300007032,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001471 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "24ae083d87da8f74a5f11712d3c1bf7fd37f0561",
          "message": "grn_obj_get_info: add llama.cpp/Faiss availability checks",
          "timestamp": "2025-10-25T20:50:40+09:00",
          "tree_id": "875c080e9c366b3cb6a6714a270536f46b7485f4",
          "url": "https://github.com/kou/groonga/commit/24ae083d87da8f74a5f11712d3c1bf7fd37f0561"
        },
        "date": 1761395023781,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36758067999994637,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015159999999999979 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2716657899999291,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012690000000000173 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015193021000072804,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003910000000000302 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014971781999975065,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000336000000000114 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3908490719999804,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000149000000000149 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24147266900001796,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007255999999999943 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13802906199993004,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005233000000000154 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016118610999967586,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013140000000001484 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016609601000027396,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014889999999997405 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06447025099998882,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007370999999999933 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0597648520000007,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006720999999999422 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017047653999952672,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014369999999996053 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02635306499996659,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014469999999998373 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e524d2378f71343060f8d42fc121a5ffb028505",
          "message": "grn_obj_get_info: add llama.cpp/Faiss availability checks (#2602)",
          "timestamp": "2025-10-26T10:33:26+09:00",
          "tree_id": "68cc17e4807b48de40863d0b5cd49362eb8707fd",
          "url": "https://github.com/kou/groonga/commit/0e524d2378f71343060f8d42fc121a5ffb028505"
        },
        "date": 1761465253218,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35251140000008263,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013301000000000007 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26569219699990754,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011907999999999891 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01492137999997567,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0002960000000000462 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.012966745999960949,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003269999999999662 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5970944450000388,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015300000000015301 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21129050100000768,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005963999999999858 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11941100399991456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006237000000000145 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01613594500003046,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014909999999999923 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014391315000068516,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013369999999999077 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06088903600004869,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007240999999999914 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05706871299997829,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006439999999999946 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016923921000056907,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001283000000000159 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01486699000003,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001394000000000284 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "6f0e136587ed3b2137cb1e837366a7d1a1574ec6",
          "message": "clang-format: add accessor.h",
          "timestamp": "2025-10-27T00:10:02+09:00",
          "tree_id": "5a5bad79dcb5a476b6d369ce84047265bb9952be",
          "url": "https://github.com/kou/groonga/commit/6f0e136587ed3b2137cb1e837366a7d1a1574ec6"
        },
        "date": 1761491831411,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39801869700045245,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021267999999999843 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27003940599979614,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015207999999999972 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01547557000026245,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044200000000049755 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015348314999982904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005370000000002317 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7308815079998112,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015600000000001724 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24771660900023562,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008763000000000076 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1384730099994158,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007047000000000192 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016870238999672438,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001852000000000159 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01704768200011131,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019510000000001748 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06484478399943328,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0078700000000001 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0641933319996042,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00846199999999972 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01825991200007593,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016150000000001719 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01992276700025286,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020949999999995694 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9dd6a5fcf1b83a18b45b35cceacf641b53c5cf50",
          "message": "clang-format: add accessor.h (#2603)",
          "timestamp": "2025-10-27T09:09:15+09:00",
          "tree_id": "5a5bad79dcb5a476b6d369ce84047265bb9952be",
          "url": "https://github.com/kou/groonga/commit/9dd6a5fcf1b83a18b45b35cceacf641b53c5cf50"
        },
        "date": 1761524165202,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37992873000001737,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017389 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26537361999993436,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012754999999999711 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.009694120999995448,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000320000000000098 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015198444999953153,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003700000000000092 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4416704329999561,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003289999999999682 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24121029099995894,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00611600000000008 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1351422029999867,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00549400000000011 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015821710000011535,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015409999999999868 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016764207999983682,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015270000000001671 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0632660929999247,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006956000000000226 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.059566496999991614,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006774999999999809 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016590960000030464,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001575999999999772 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026384258000064165,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001653000000000071 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "c72a69caacc0f15726a7e140d63e6adbb257fe28",
          "message": "language-model-knn: fix order\n\nWe should return more similar records.",
          "timestamp": "2025-10-27T09:15:55+09:00",
          "tree_id": "aa25cebf3be1d2a6ae049b6c42a43ef514d45a7c",
          "url": "https://github.com/kou/groonga/commit/c72a69caacc0f15726a7e140d63e6adbb257fe28"
        },
        "date": 1761524473937,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37675901000011436,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016474999999999962 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27816752099994346,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015699000000000157 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014551891000053274,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003559999999998009 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.022932658999991418,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004110000000003833 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4589214310000216,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015899999999988146 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2464316029999054,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008945000000000106 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1357692099999781,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005302999999999919 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016353427000069587,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015909999999998703 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.020342867999943337,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001520000000000049 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0633858850001161,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007822000000000301 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06327812000000677,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0075589999999989 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01667735000006587,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015569999999997808 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026122998000062125,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017100000000004612 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5909c9b4902c9b167c73603631b3ad12b59ccd8d",
          "message": "language-model-knn: fix order (#2604)\n\nWe should return more similar records.",
          "timestamp": "2025-10-27T09:59:12+09:00",
          "tree_id": "aa25cebf3be1d2a6ae049b6c42a43ef514d45a7c",
          "url": "https://github.com/kou/groonga/commit/5909c9b4902c9b167c73603631b3ad12b59ccd8d"
        },
        "date": 1761537861818,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3713078200000268,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01510500000000009 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2776166560000206,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015442999999999985 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015181216000030417,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033700000000025376 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014978482999993048,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003709999999998992 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5157195779999881,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00029500000000001747 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24513106700001686,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00705699999999998 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13845823299990911,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006914999999999907 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016194439999992483,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013979999999998716 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016602170000027172,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001656000000000185 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06484447499997259,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007319999999999799 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06692202099998212,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007016999999999551 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016906205999958956,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016440000000007837 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017609264000014946,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014719999999998623 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "612986393433f6d182638bd87a97cd1ecd15c172",
          "message": "accessor: add getters for plugins",
          "timestamp": "2025-10-27T23:28:27+09:00",
          "tree_id": "b4f90f42b7b8ff4e2f6c62da5162e0e99b0b9b27",
          "url": "https://github.com/kou/groonga/commit/612986393433f6d182638bd87a97cd1ecd15c172"
        },
        "date": 1761575946687,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3774842629999853,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018968000000000068 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2837468210000793,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016201000000000146 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014784287999930257,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035800000000002496 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014819113999976707,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003720000000000667 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5272162789999584,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021000000000004349 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2418075279998675,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005742000000000164 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14242915099998754,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0063020000000000576 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015926473999968493,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001441999999999971 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.0165201570000022,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014380000000001891 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06039992899985691,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007322000000000134 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06296624800000927,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007043000000000271 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016841545999966456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00152699999999939 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025735759999975016,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015229999999997745 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "026c511fc75295aea00c1d6dc62372548ac6feb5",
          "message": "sorter: add\n\nThis is for implementing custom sort logic. For example, we can\nre-implement `--sort_keys geo_distance(...)` by sorter.",
          "timestamp": "2025-10-28T08:20:53+09:00",
          "tree_id": "258cc739343cfe7dc07f84dc3b2c118b191a5509",
          "url": "https://github.com/kou/groonga/commit/026c511fc75295aea00c1d6dc62372548ac6feb5"
        },
        "date": 1761607572132,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37228837199984355,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016483000000000025 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2701907750000032,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013434999999999947 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01841950599998654,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003579999999995531 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015346574999966833,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033200000000011 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4683524330000068,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001589999999998537 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24111654100005353,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006012000000000073 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13878027200001952,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006546999999999525 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016487090999987686,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014429999999998888 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016326153000022714,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013769999999999616 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06128421400012485,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00718999999999953 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06199826799996799,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007336999999999511 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017364750000126605,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014989999999999448 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02596568600000637,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016360000000002761 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "709fc7290752422463ebde6d240e1e037af16a9f",
          "message": "sorter: add\n\nThis is for implementing custom sort logic. For example, we can\nre-implement `--sort_keys geo_distance(...)` by sorter.",
          "timestamp": "2025-10-28T08:45:47+09:00",
          "tree_id": "f2bc5943d593f6a5773be9253d351340694512c5",
          "url": "https://github.com/kou/groonga/commit/709fc7290752422463ebde6d240e1e037af16a9f"
        },
        "date": 1761611354649,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3977733839999473,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02313000000000008 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26941780800012793,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013438999999999673 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015541420000033668,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003699999999995929 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015209404999950493,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040500000000021075 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6204850080000028,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016199999999982895 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24319245300006287,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008078999999999503 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1404467749999867,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070270000000002275 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016344333999938954,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014890000000002679 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016842908999990414,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015319999999998946 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07283377399988922,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014671000000000045 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0683277560000306,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008691000000000337 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016863897000007455,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001422999999999508 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026322043999982725,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001699000000000478 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "4fbd86234398f8b4a1f99937bf6d24c03cf80764",
          "message": "sorter: add\n\nThis is for implementing custom sort logic. For example, we can\nre-implement `--sort_keys geo_distance(...)` by sorter.",
          "timestamp": "2025-10-28T11:32:06+09:00",
          "tree_id": "dfe1ec230efb391b0ce8a7eaedb3e069e8e62f95",
          "url": "https://github.com/kou/groonga/commit/4fbd86234398f8b4a1f99937bf6d24c03cf80764"
        },
        "date": 1761622633286,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3864233730000137,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022100999999999954 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26952112200001466,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014122999999999886 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01585551100004068,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004040000000000987 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015521611999986362,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005069999999998132 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8145740859999933,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001529999999999032 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.244980908999878,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008411999999999989 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1401827830000002,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007115999999999734 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01806813600001078,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015699999999999603 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017235704000029273,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001948999999999479 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06566288499999473,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011352999999999697 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06537299799998664,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008753000000000094 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017310586000007788,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017439999999996902 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018188337999959003,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017559999999998965 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "0c6d802ffcb3c73358760958d7b9386ccfd1a012",
          "message": "geo-distance: use sorter",
          "timestamp": "2025-10-28T13:02:14+09:00",
          "tree_id": "a7044350a9df883c03059d0e1a470a009ca741b3",
          "url": "https://github.com/kou/groonga/commit/0c6d802ffcb3c73358760958d7b9386ccfd1a012"
        },
        "date": 1761624856562,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3801638250001247,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020829999999999932 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2714585930000908,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014721000000000178 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014349491000018588,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000458000000000236 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015245968999977322,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039800000000006497 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5264603120000402,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003680000000000072 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23683708699991257,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007091000000000097 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15394708900004161,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006564999999999932 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01599383499990381,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015350000000002861 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016788530999974682,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001526000000000749 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0637697649999609,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010571000000000122 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06165269299992815,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008190999999999143 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016565029999981107,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016090000000002491 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017490638000026593,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016630000000000256 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "884bbff674204efea2954a1c27458b91ef5499ef",
          "message": "geo-distance: use sorter (#2609)",
          "timestamp": "2025-10-28T14:51:34+09:00",
          "tree_id": "a7044350a9df883c03059d0e1a470a009ca741b3",
          "url": "https://github.com/kou/groonga/commit/884bbff674204efea2954a1c27458b91ef5499ef"
        },
        "date": 1761632426093,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36390802300013547,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01567600000000008 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2640768380001077,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012928999999999885 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015165471999978308,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031599999999998296 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014839411999957974,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004019999999997914 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5241417170000204,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003249999999997977 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24258275999994794,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006873999999999866 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1360693670000046,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006683999999999968 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015791485999955057,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015999999999998793 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016684638000072027,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015280000000000293 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06357453800006851,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006959999999999716 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06276837600006502,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006586000000000092 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017576722000001155,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014879999999998506 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026006589000019176,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001605999999999913 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "3518688c3f03b4a20065d400af4fc6ad8fd3ea4d",
          "message": "language-model-knn: add sorter\n\nAND filter in selector is also implemented.",
          "timestamp": "2025-10-28T15:42:12+09:00",
          "tree_id": "0bf43e045154af86f631c3627c7adc6930a33812",
          "url": "https://github.com/kou/groonga/commit/3518688c3f03b4a20065d400af4fc6ad8fd3ea4d"
        },
        "date": 1761634210415,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.34714665999990757,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012914000000000078 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2520648620000543,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010773000000000268 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016099101000008886,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003769999999997664 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013880737000022236,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039200000000012836 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6141699629999948,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015199999999995772 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22720248999996784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008676999999999803 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11527627099991378,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005982999999999863 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01594693300006611,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013220000000000176 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014898412999968969,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012610000000002897 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06460631699997066,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006443000000000157 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.059503298000038285,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007883999999999475 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017738515000019106,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001283999999999369 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025025073999927372,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012670000000002957 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "b3b1587606461b34f760eaef7dcb874240a52569",
          "message": "language-model-knn: add sorter\n\nAND filter in selector is also implemented.",
          "timestamp": "2025-10-28T15:56:09+09:00",
          "tree_id": "0e9e1399a0bbe92d00f7f2c941c7ee624e6f88a1",
          "url": "https://github.com/kou/groonga/commit/b3b1587606461b34f760eaef7dcb874240a52569"
        },
        "date": 1761635116880,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39381173000015224,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02308999999999975 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27053743300007227,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014890000000000181 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015329959000041526,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042000000000042004 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015174345999867,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044700000000000295 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.9097095790000367,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016399999999963666 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24588799199989353,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008640999999999885 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14128219999986413,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010622999999999633 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016273761999968883,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014779999999998683 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016831560999889916,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016319999999998835 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07294365400025526,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01589300000000017 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06705978100001175,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008488999999999997 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018505634000121063,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019609999999997407 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026523575000055644,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019669999999996912 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "e3ba50ee9a7cc897cc3958b81252094d1667a275",
          "message": "Debug",
          "timestamp": "2025-10-29T12:19:39+09:00",
          "tree_id": "cddcf43eff66bd40e36114b6b474146cc0009749",
          "url": "https://github.com/kou/groonga/commit/e3ba50ee9a7cc897cc3958b81252094d1667a275"
        },
        "date": 1761709698483,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.385695799999894,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02062299999999971 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2657942869997214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013133000000000145 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015550134000022808,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038599999999980317 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015044002999957229,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039600000000006297 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6058150039999646,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017099999999972693 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24523625799997717,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009085999999999844 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13706488700017871,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006833000000000283 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016538588000230448,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014990000000005277 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02150961000006646,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001474000000000114 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06573267700002816,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007854000000000208 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06565870800000084,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008963999999999861 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017193240000210608,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015790000000000248 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01781638600016322,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001918999999999782 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "9b05f67b641ef4f71d7f1d696fc947eda1587a36",
          "message": "Debug",
          "timestamp": "2025-10-29T12:41:49+09:00",
          "tree_id": "b73fe1b5a40f487bb060ddeca798ccf4aa69b124",
          "url": "https://github.com/kou/groonga/commit/9b05f67b641ef4f71d7f1d696fc947eda1587a36"
        },
        "date": 1761711172311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39428942300008885,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02137400000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28050077899996495,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016954999999999443 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015643284000020685,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003889999999998339 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015235580000023674,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005739999999996859 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.487112667999952,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016199999999996773 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24487380300007544,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008067000000000074 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13668636999989303,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0060999999999997445 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01651028500003804,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014310000000001821 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016444029999945542,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014370000000002714 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06611567500004867,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007180999999999854 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06640871800016157,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007896000000000958 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.019118617999993148,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018249999999996047 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025692311000000245,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013940000000002284 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "acb63227ae9bd43987fc0ae869528dfd96d616c9",
          "message": "Debug",
          "timestamp": "2025-10-29T14:17:02+09:00",
          "tree_id": "ac8d05b85ecc093effa61f35dcfcb2b31d62e0ff",
          "url": "https://github.com/kou/groonga/commit/acb63227ae9bd43987fc0ae869528dfd96d616c9"
        },
        "date": 1761715278730,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3823057260000269,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020764000000000032 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2753292040001156,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01573700000000003 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0149724340000148,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033000000000024676 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015075448999994023,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035700000000016274 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6846828019999975,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015999999999991021 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24313593099986974,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0074509999999999715 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13885947299996815,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006951000000000207 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016820807999920362,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014870000000001271 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01660779199994522,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014750000000000318 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0628506810000431,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007507999999999959 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0661191080001231,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008273999999999337 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017445029999976214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016220000000002344 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019292393999876367,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014519999999999533 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "fa998bed2a6d0513a4c0e7f8089de65a17a1f3b9",
          "message": "Need timeout",
          "timestamp": "2025-10-29T15:01:04+09:00",
          "tree_id": "54bdf5db7158e0a02b53039d77f52ab3e982d0c2",
          "url": "https://github.com/kou/groonga/commit/fa998bed2a6d0513a4c0e7f8089de65a17a1f3b9"
        },
        "date": 1761717901552,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.377393622999989,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019030999999999992 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29314191100007747,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019380999999999954 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01495568099997513,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036499999999997645 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014890098999984502,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004010000000002345 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3894770500000106,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015499999999998848 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24301737699991577,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005673000000000039 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1361045200000035,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005204999999999876 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016377289999979894,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014699999999999436 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01637576000007357,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014860000000007367 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06059174299997494,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006405999999999912 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0592266650000397,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006281999999999621 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016688986000019668,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015999999999998238 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017148028000036675,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016249999999999876 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "abe@clear-code.com",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab2153a0beb15db9babdb1c7a55ccb144b58576e",
          "message": "Rename TokenLanguageModel to TokenLanguageModelKNN (#2614)\n\nSince the `TokenLanguageModel` is too generic, we will rename it to\n`TokenLanguageModelKNN` with `KNN` added.",
          "timestamp": "2025-10-30T05:48:40+09:00",
          "tree_id": "3ecaaa51266d4bba82af8df7fba14a271a1b4341",
          "url": "https://github.com/kou/groonga/commit/ab2153a0beb15db9babdb1c7a55ccb144b58576e"
        },
        "date": 1761789654546,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3909857620000139,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021703000000000097 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27219186099989656,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01509400000000019 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0151431940000748,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035999999999991594 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015047212000013133,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003559999999998009 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.565108495000004,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001989999999998382 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24197039300008782,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006685000000000246 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13691061099984836,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005923000000000039 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01638474799983669,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014109999999998846 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016857826000091336,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017340000000002909 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06441923700003827,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00837499999999973 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06483638100007738,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007552000000000336 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017035966999969787,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017810000000001713 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.020896273000062138,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00159200000000001 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "6d75e0747080fe09a7704269d623b52a64b0e31a",
          "message": "language-model: extract Vectorizer\n\nThis will help when we implement parallel vectorization.",
          "timestamp": "2025-10-30T10:55:51+09:00",
          "tree_id": "0e2ebc61007cbd64a2d2af3b0fda15e90f3c9bf9",
          "url": "https://github.com/kou/groonga/commit/6d75e0747080fe09a7704269d623b52a64b0e31a"
        },
        "date": 1761790172317,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3867772739999964,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021168000000000145 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28625993299999664,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0183289999999999 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0149956490000136,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000340000000000229 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01701186100007135,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035400000000010423 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4634524360000114,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017699999999984395 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23540619700003163,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005923000000000192 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1330816359999858,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005562999999999929 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01658873600001698,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014690000000000675 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.020574464999924658,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001444999999999974 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06280468600010636,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00676600000000005 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0630193980000513,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00648199999999996 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017118345000028512,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014890000000001846 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026223862000051668,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001399999999999929 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "f84f471935af49f76f44d5f22b6b0a3772293683",
          "message": "language-model: extract Vectorizer\n\nThis will help when we implement parallel vectorization.",
          "timestamp": "2025-10-30T11:01:02+09:00",
          "tree_id": "d2e31b1302416df0c8cbe2ea44bd9a4e360ede30",
          "url": "https://github.com/kou/groonga/commit/f84f471935af49f76f44d5f22b6b0a3772293683"
        },
        "date": 1761792639923,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.385992329000004,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020851000000000258 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29605496199997106,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0206000000000002 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015462617000025602,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042100000000042104 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024487404000041124,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004319999999997659 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6049487690000035,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014299999999994872 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23680772400010142,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006284999999999832 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13407076100003223,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005272000000000138 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016581150999968486,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014849999999999586 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016519235999993498,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014579999999999593 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06164317099998584,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006619000000000291 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06253451299994595,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00753399999999943 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01757896599997366,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001439000000000662 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017160641000003807,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015620000000002299 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "0274c65655fcc26b9d115f4c3bff065259a40748",
          "message": "language-model: use average pooling for long text\n\nIn general, this has better performance than truncating. This is a\nSWEM-aver like approach.\n\nThis requires C++20 for `std::span`.",
          "timestamp": "2025-10-31T03:18:01+09:00",
          "tree_id": "c32c1227c5d81bbfb5b5947623a685bfdc178bf1",
          "url": "https://github.com/kou/groonga/commit/0274c65655fcc26b9d115f4c3bff065259a40748"
        },
        "date": 1761850326648,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3979042049999748,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021845999999999963 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2625281300003053,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012425999999999798 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015223990000095,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003720000000000112 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.023757570000157102,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003929999999998657 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4493898630000785,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020699999999992946 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24907153300000573,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005820000000000061 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13454388300010578,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006067999999999865 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01625134000005346,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013739999999999863 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016354091999915,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015680000000000416 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06134398300002886,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007859999999999812 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06291427799999383,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006752000000000036 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017290957000000162,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014669999999998573 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01744042000018453,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014629999999997423 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "81a1a3de85fbeec14220c321e15df15d5a503287",
          "message": "language-model: use average pooling for long text\n\nIn general, this has better performance than truncating. This is a\nSWEM-aver like approach.\n\nThis requires C++20 for `std::span`.",
          "timestamp": "2025-10-31T04:38:50+09:00",
          "tree_id": "0d4472022ce5bb47a2b499003d1424b3ba4a7261",
          "url": "https://github.com/kou/groonga/commit/81a1a3de85fbeec14220c321e15df15d5a503287"
        },
        "date": 1761853360735,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37479119699992225,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017040999999999987 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29875725000005104,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02177100000000029 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016238675000067815,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004082999999999587 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015252620000126171,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000395000000000284 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4959147950000329,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015700000000001824 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25444461199998614,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00787600000000023 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13378599500009614,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005712999999999635 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01670683899993719,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017539999999997002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01638953899993112,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014819999999997335 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06409874399997761,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007687000000000124 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06735199500002409,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007680999999999438 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01805716899991694,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018410000000006477 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02588230799995017,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015890000000003124 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "971472bdb4926aaca50aa670298ed834161d6d53",
          "message": "language-model: use average pooling for long text\n\nIn general, this has better performance than truncating. This is a\nSWEM-aver like approach.\n\nThis requires C++20 for `std::span`.",
          "timestamp": "2025-10-31T05:25:55+09:00",
          "tree_id": "d0b85ec5384cd9b62555527820b696d495def59b",
          "url": "https://github.com/kou/groonga/commit/971472bdb4926aaca50aa670298ed834161d6d53"
        },
        "date": 1761856173284,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3683966490000046,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0149640000000002 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28808197899999755,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019755999999999885 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015195125000047938,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003330000000000555 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014752030999972021,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033499999999975216 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3641927989999942,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003049999999999997 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24665886800002568,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005478000000000205 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13404971700003898,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0049520000000000675 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01629553199998668,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001544999999999741 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016201618000025064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001532999999999729 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06062893700001837,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007078999999999988 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.061316531999978,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005416000000000615 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01653272199996536,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013699999999996493 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025626974999994445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013729999999997355 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "2310b9b312b505fb3629bb420e9dbc363a949682",
          "message": "language-model: use average pooling for long text\n\nIn general, this has better performance than truncating. This is a\nSWEM-aver like approach.\n\nThis requires C++20 for `std::span`.",
          "timestamp": "2025-10-31T09:44:25+09:00",
          "tree_id": "fdecbed89b6b9b028c69136cf5659e469605fd2c",
          "url": "https://github.com/kou/groonga/commit/2310b9b312b505fb3629bb420e9dbc363a949682"
        },
        "date": 1761872073729,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.387378133000027,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019835999999999937 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28931655700000647,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019401999999999614 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01528334699997913,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000333000000000111 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015152884000087852,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003430000000000377 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.474811222000028,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003750000000000142 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25354719699998896,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00785899999999995 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13789920800002164,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005570000000000214 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01684508199997481,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016519999999999035 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01673957499997414,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015420000000003764 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06498183099989774,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008020000000000083 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06587890700001253,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007498999999999811 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018101586999875963,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014820000000001221 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026314782999918407,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001734999999999598 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "abe@clear-code.com",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c98083795aa2fbd96b141deb9b94aecaa50693c8",
          "message": "doc news: add 15.1.8 entry (#2621)\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\nCo-authored-by: Sutou Kouhei <kou@clear-code.com>",
          "timestamp": "2025-10-31T14:09:01+09:00",
          "tree_id": "5d95dc135ee96d322d5edf084fc9f31435d4e50b",
          "url": "https://github.com/kou/groonga/commit/c98083795aa2fbd96b141deb9b94aecaa50693c8"
        },
        "date": 1761887814527,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3787953560000119,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01689899999999997 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27188035499995067,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01526899999999995 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015438376000076914,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004200000000001147 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024088756000026024,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003949999999994791 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4963812869999629,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014700000000006375 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23635840000002872,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006548000000000137 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13129898499994397,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005736000000000213 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01713563499998827,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001579999999999998 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02532460500003708,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015010000000001411 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06243192600010161,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009717000000000309 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06374364300006619,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007388999999999868 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016946259999997437,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015649999999998443 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017101489000026504,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014980000000002214 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "fd66de74930ba9b50465d1d651ec8f6b1ef2c301",
          "message": "language-model: use average pooling for long text\n\nIn general, this has better performance than truncating. This is a\nSWEM-aver like approach.",
          "timestamp": "2025-10-31T14:45:48+09:00",
          "tree_id": "43cef1e305f9eaa48cf1438cc7848bf18b9cf4d5",
          "url": "https://github.com/kou/groonga/commit/fd66de74930ba9b50465d1d651ec8f6b1ef2c301"
        },
        "date": 1761889918359,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3702968580000743,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019420999999999924 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29389479000008123,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020107000000000236 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01574118000002045,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039800000000020375 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015538188000050468,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003729999999999567 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4428087200000164,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014999999999981695 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2255883739999831,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006533999999999887 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.133240237999928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005282999999999927 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01685869499999626,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016299999999996595 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01683855900000708,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016500000000000126 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06508578900013617,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008670000000000483 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06684009800005697,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006720999999999505 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017836505999980545,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014040000000000996 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026445885999976326,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001463999999999771 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "41a6ea1d5c4aad144dc52b8e1b24a28e5d333ea2",
          "message": "language-model: use average pooling for long text\n\nIn general, this has better performance than truncating. This is a\nSWEM-aver like approach.",
          "timestamp": "2025-10-31T15:52:34+09:00",
          "tree_id": "dbe2843377a9c07709cc3ac81bd3870652386490",
          "url": "https://github.com/kou/groonga/commit/41a6ea1d5c4aad144dc52b8e1b24a28e5d333ea2"
        },
        "date": 1761894159911,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37226371999992125,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019649999999999918 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2669380359999991,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012752000000000319 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015382848000001559,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039100000000000246 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015429987000061374,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034499999999951236 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.440899633000015,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020699999999987395 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22627121299996134,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006049000000000082 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1352279829999361,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005614000000000036 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016639185000087764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015229999999997745 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016878337999969517,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014700000000003877 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0636768840000741,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006981999999999822 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06517718699996067,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006143000000000037 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017978961000039817,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015159999999999618 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02535913399998435,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015250000000002761 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a3aefc0fe0a8211dfa3f03ac86fcbcf266e438d",
          "message": "language-model: use average pooling for long text (#2620)\n\nIn general, this has better performance than truncating. This is a\nSWEM-aver like approach.",
          "timestamp": "2025-11-01T06:18:40+09:00",
          "tree_id": "eaf2c0026f6c37a76b80c510a5829318f88ec317",
          "url": "https://github.com/kou/groonga/commit/9a3aefc0fe0a8211dfa3f03ac86fcbcf266e438d"
        },
        "date": 1762035350537,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3689609490000407,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01631200000000009 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2643837809998786,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012832000000000093 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015549441999951341,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042899999999984617 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015264450000074703,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033899999999964514 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3933434450000277,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020900000000007024 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2284042160000581,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006688999999999792 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13640675999988616,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005927999999999947 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017061021000017718,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001388000000000028 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01652240199996413,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001419999999999838 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06269983599997886,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00702099999999975 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06626577399998723,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008618999999999766 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01740745000000743,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015420000000001544 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017612959999951272,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016860000000006592 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "ef76288ee86144748f34241512c285ed296d3c90",
          "message": "cmake: fix bundled base64 source archive path",
          "timestamp": "2025-11-02T07:36:34+09:00",
          "tree_id": "9b2e7aa43e30d3cb0212529592b80721b67cc35f",
          "url": "https://github.com/kou/groonga/commit/ef76288ee86144748f34241512c285ed296d3c90"
        },
        "date": 1762036915245,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.34846601699996427,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015526000000000012 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26265906200001155,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012782999999999864 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016586584999970455,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0037740000000002494 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.016401330999940456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003879999999997774 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4680522230000292,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001459999999998407 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23060887800005503,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005838999999999983 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13934264599993185,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005539999999999948 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016875796000078935,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001409999999999939 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016796762000012677,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017119999999999913 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06113769200004526,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007230000000000181 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06330524100008006,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006131000000000053 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017838163999954304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015459999999997975 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026468160999968404,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016759999999999553 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "c574d074efe790dc0e604ff2621793343c2c39b7",
          "message": "cmake: fix bundled base64 source archive path",
          "timestamp": "2025-11-02T08:05:37+09:00",
          "tree_id": "21b8b9e75e20f1cd9523815980e2da6e69cf945f",
          "url": "https://github.com/kou/groonga/commit/c574d074efe790dc0e604ff2621793343c2c39b7"
        },
        "date": 1762038688526,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3715394340000273,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020519999999999927 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28073636199997054,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01677999999999985 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01672053700002607,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040599999999990644 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015178318000010904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036299999999966914 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4232405699999902,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001409999999998357 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22868356499995457,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007470000000000199 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1352297599999872,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0058639999999997305 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016543511000008948,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001512000000000041 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017245083000005934,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015050000000001729 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06548479399998541,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009584000000000023 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.061914679000039996,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00699500000000064 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017101804000049015,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013830000000001619 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017555835999985447,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015009999999993917 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "5a6847e694cb339fe973c5446114814ae440d8ae",
          "message": "language-model: use \"embedding\" not \"embeddings\" for one text",
          "timestamp": "2025-11-02T14:09:03+09:00",
          "tree_id": "ed5d3458efa4b8d145ef3a830d0cb823057e20a9",
          "url": "https://github.com/kou/groonga/commit/5a6847e694cb339fe973c5446114814ae440d8ae"
        },
        "date": 1762060376517,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37844517499999597,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02217600000000003 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2750197270000285,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015215000000000228 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01601739600002361,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038799999999999946 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015285956000042233,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004119999999999957 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4280807290000155,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004559999999997899 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22551787099999387,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006117000000000011 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13463426000001277,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005327999999999916 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016294524000016963,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001316999999999957 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01644214000000943,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013580000000000536 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0640233419999845,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007366000000000372 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06533271599991508,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006153000000000075 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017679805000028637,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015119999999997913 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02103816799998981,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015239999999998588 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "ce53cbe59fbb16faa71c4e7d6b99dbf33c534017",
          "message": "ci arch-linux: ensure using the latest repository",
          "timestamp": "2025-11-02T14:12:39+09:00",
          "tree_id": "a7be6138184894e0ba12d58232576e9925772636",
          "url": "https://github.com/kou/groonga/commit/ce53cbe59fbb16faa71c4e7d6b99dbf33c534017"
        },
        "date": 1762060749111,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3467002470000011,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014893000000000323 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2700839389999601,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01510199999999999 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015109023000036359,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036299999999997445 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015080978000014511,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041399999999991444 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4997897009999974,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00033100000000008123 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22682629999999904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006039000000000128 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13789541600002053,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0071380000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016291064000000688,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015379999999999283 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01660079600003428,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014000000000001511 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06084637600002907,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006907000000000482 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06371408500001507,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006745999999999114 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017424276999975064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014050000000001561 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017579357999977674,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014420000000003041 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "7e63a6bf0d5dcd2cea992ffbc15eb88c9eb8d41f",
          "message": "ci arch-linux: ensure using the latest repository",
          "timestamp": "2025-11-02T14:32:56+09:00",
          "tree_id": "aa16d6a37e96de0b8bc3e76b707a7067c07aec0a",
          "url": "https://github.com/kou/groonga/commit/7e63a6bf0d5dcd2cea992ffbc15eb88c9eb8d41f"
        },
        "date": 1762062255960,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38342619899998454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022798000000000082 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28192686200003436,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015686000000000352 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015872298999966006,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038500000000013523 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015459493999969709,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039400000000044955 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4755479939999532,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014700000000000824 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22582085499999494,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007551000000000016 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13469365799994648,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0055979999999994645 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016971798999975363,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001365000000000366 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01677862099995764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015380000000002614 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05983031200003097,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0063860000000001 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06444547099999909,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006857000000000085 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017377405000047474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014630000000003252 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02636365700004717,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00147000000000036 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "9b76cc9726a46c382447bbd0c5a132cef0cb5098",
          "message": "language-model: add support for parallel vectorization\n\nIn general, 1 GPU is faster than multiple CPUs. So\n`--n-default-workers=-1` will not be optimal because it's based on the\nnumber of CPUs.\n\nYou must check GPU usage not CPU usage for the optimal number of\nworkers.",
          "timestamp": "2025-11-02T22:44:36+09:00",
          "tree_id": "d30af23f3361086127c0a3058d897b8bb664eee5",
          "url": "https://github.com/kou/groonga/commit/9b76cc9726a46c382447bbd0c5a132cef0cb5098"
        },
        "date": 1762091981578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.34353035500004125,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013058000000000042 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.24894430899996678,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010321000000000316 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015798918999962552,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000324000000000213 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02010070200009295,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036400000000003097 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5469086200000106,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001409999999998912 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.20383807199999637,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00576500000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11509195299998964,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004894999999999858 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016106720999914614,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013279999999999126 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014234899999962636,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013010000000002325 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0596105140000418,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0065930000000002514 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05449875400000792,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006032999999999608 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01800343399997928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013319999999999999 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028372036000064327,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015090000000001491 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "3a482a14f4cd26563d85540c3879c135387a59ee",
          "message": "language-model: add support for parallel vectorization\n\nIn general, 1 GPU is faster than multiple CPUs. So\n`--n-default-workers=-1` will not be optimal because it's based on the\nnumber of CPUs.\n\nYou must check GPU usage not CPU usage for the optimal number of\nworkers.",
          "timestamp": "2025-11-02T22:56:03+09:00",
          "tree_id": "6511599bffe902f15677ced7fca26b83a2b5a15f",
          "url": "https://github.com/kou/groonga/commit/3a482a14f4cd26563d85540c3879c135387a59ee"
        },
        "date": 1762092792946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3608795769999915,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01740399999999999 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2878410480000184,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018551999999999874 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015748335000012048,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036300000000036303 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024298266999949192,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040499999999946135 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.409163699999965,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016600000000022153 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22648299199994426,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006714999999999999 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13382144499985316,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004943000000000031 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016078309000022273,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001368000000000258 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016535505000035755,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015240000000003029 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.058805513000038445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00958899999999982 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.060327497999992374,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00653999999999938 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017880853999940882,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016020000000009915 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025991768000039883,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015159999999996288 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "376a30a9b1c0ad9df4b8d95f7253f0adf89723de",
          "message": "language-model: add support for prefix\n\nSome models such as multilingual-e5 require prefix for search target\ntexts and query texts. This adds support for these cases.\n\n`passage_prefix` is for prefix for search target text.\n`query_prefix` is for prefix for query text.\n\n    TokenLanguageModelKNN(\"model\", \"hf:///groonga/multilingual-e5-base-Q4_K_M-GGUF\", \\\n                          \"code_column\", \"rabitq_code\", \\\n                          \"passage_prefix\", \"passage: \", \\\n                          \"query_prefix\", \"query: \")\n\nTODO: Add support for prefix in `language_model_vectorize()` applier.",
          "timestamp": "2025-11-03T00:46:41+09:00",
          "tree_id": "c8b4fb5be5fefe7cab98819158b8660f9280e7d8",
          "url": "https://github.com/kou/groonga/commit/376a30a9b1c0ad9df4b8d95f7253f0adf89723de"
        },
        "date": 1762099340252,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.34823430099999086,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01531299999999991 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26302058999999645,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01294400000000015 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01588506400003098,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003900000000002235 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015315813999961847,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003880000000003325 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6269581340000059,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019000000000010675 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2274780660000033,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007114000000000065 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13606552100003455,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006374999999999964 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01689946199996939,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014450000000002239 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01660988300000099,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001708000000000237 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06217648199987025,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008071999999999663 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06587805200024377,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007859000000000588 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017268613999931404,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015220000000002176 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02146847799997431,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001728000000000257 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "28d23bd6ab12e472d6038ff9c3c1abb4ce5d31ee",
          "message": "language-model: add support for prefix\n\nSome models such as multilingual-e5 require prefix for search target\ntexts and query texts. This adds support for these cases.\n\n`passage_prefix` is for prefix for search target text.\n`query_prefix` is for prefix for query text.\n\n    TokenLanguageModelKNN(\"model\", \"hf:///groonga/multilingual-e5-base-Q4_K_M-GGUF\", \\\n                          \"code_column\", \"rabitq_code\", \\\n                          \"passage_prefix\", \"passage: \", \\\n                          \"query_prefix\", \"query: \")\n\nTODO: Add support for prefix in `language_model_vectorize()` applier.",
          "timestamp": "2025-11-03T06:17:42+09:00",
          "tree_id": "747a8b827e40e49eb07917e7f0a5d7a1ed11cd90",
          "url": "https://github.com/kou/groonga/commit/28d23bd6ab12e472d6038ff9c3c1abb4ce5d31ee"
        },
        "date": 1762119048757,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36270978800013154,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017961000000000102 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2976364769999691,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020875000000000032 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016652802999999494,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041200000000007897 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.0155335330001094,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004780000000000617 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.440565056999958,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019800000000011475 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22665048600003956,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008001999999999995 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1359512320000249,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006197000000000452 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017080480999936754,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001539999999999625 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016751607000060176,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015700000000004322 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0630457450001245,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007309000000000343 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06585724100000334,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007774999999999782 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018246850999958042,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016280000000003514 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026425040000049194,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015279999999995297 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b2e7242b5a162236625da9231f2aa040d813f9d9",
          "message": "language-model: add support for prefix (#2628)\n\nSome models such as multilingual-e5 require prefix for search target\ntexts and query texts. This adds support for these cases.\n\n`passage_prefix` is for prefix for search target text. `query_prefix` is\nfor prefix for query text.\n\nTokenLanguageModelKNN(\"model\",\n\"hf:///groonga/multilingual-e5-base-Q4_K_M-GGUF\", \\\n                          \"code_column\", \"rabitq_code\", \\\n                          \"passage_prefix\", \"passage: \", \\\n                          \"query_prefix\", \"query: \")\n\nTODO: Add support for prefix in `language_model_vectorize()` applier.",
          "timestamp": "2025-11-03T08:07:06+09:00",
          "tree_id": "747a8b827e40e49eb07917e7f0a5d7a1ed11cd90",
          "url": "https://github.com/kou/groonga/commit/b2e7242b5a162236625da9231f2aa040d813f9d9"
        },
        "date": 1762125317430,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35989324100000886,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018148999999999776 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.264998563000006,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013621000000000272 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015035432999866316,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003380000000001715 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015213526999957594,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037200000000015 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6816640989999883,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020399999999992646 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22540401200012639,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007054999999999839 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13455901500014988,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005739999999999551 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016746524999973644,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015159999999999063 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01679293500001222,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015770000000000783 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06250604800004567,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007583000000000409 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06430168200000708,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008440999999999782 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017261913000027107,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015199999999998548 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017672930000003362,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016009999999997693 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "1b414530cc56eeb6a966d347de9dd9321430c2b7",
          "message": "progress-logger: extract from grn_index_column_diff()\n\nWe'll reuse this for other progress logs. For example, we'll use this\nfor progress log of static index construction.",
          "timestamp": "2025-11-03T23:46:15+09:00",
          "tree_id": "0bda50d0028fee67495239d61e1d70cb64b5da98",
          "url": "https://github.com/kou/groonga/commit/1b414530cc56eeb6a966d347de9dd9321430c2b7"
        },
        "date": 1762181532732,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3704996299998129,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015246999999999955 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27645086099994387,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014863000000000154 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015398536000020613,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000380000000000269 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015730445000031068,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003830000000000222 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4181173900000204,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017700000000001048 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24490873700005977,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00603399999999997 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1399093970002241,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005475000000000285 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016790688999890335,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015399999999998193 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016872673000193572,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001683999999999991 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06239137300019593,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007730999999999877 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06337900199991964,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006882999999999806 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017825488999960726,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017090000000004046 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026371066000137944,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015370000000001216 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "7b2bf146d3a26e54022741b22828d89b91c9b064",
          "message": "progress-logger: extract from grn_index_column_diff()\n\nWe'll reuse this for other progress logs. For example, we'll use this\nfor progress log of static index construction.",
          "timestamp": "2025-11-03T23:49:08+09:00",
          "tree_id": "1bae5b3384d18407f0529655364d36d2e76c261a",
          "url": "https://github.com/kou/groonga/commit/7b2bf146d3a26e54022741b22828d89b91c9b064"
        },
        "date": 1762181954017,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37601238399997783,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015840999999999966 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2765026469999725,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014931999999999834 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015891623000015898,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044700000000030826 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015681411000059597,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004560000000007891 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.80535018300003,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017100000000003224 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24944568499989828,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008268999999999874 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15925301300001138,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011591999999999936 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017175784000016847,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016800000000001258 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.011554337999882591,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017279999999998408 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06571930300003714,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007659999999999875 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06363190100012162,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007797000000000387 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.008676383999898007,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001550999999999858 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019525239000074635,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018139999999997602 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "fe8c3ec45988ee112ca3182b048db4027a842cb3",
          "message": "progress-logger: extract from grn_index_column_diff()\n\nWe'll reuse this for other progress logs. For example, we'll use this\nfor progress log of static index construction.",
          "timestamp": "2025-11-03T23:50:06+09:00",
          "tree_id": "03bcee3693990d905371dcf39203e15e93131c20",
          "url": "https://github.com/kou/groonga/commit/fe8c3ec45988ee112ca3182b048db4027a842cb3"
        },
        "date": 1762183227606,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3738206110001556,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01648100000000008 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2740645270001778,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014128000000000307 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015395728000044073,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004159999999998054 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015249098999788657,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003549999999998277 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.597085557000014,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018099999999965366 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24558739500002957,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006419999999999856 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14135275799992542,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007019000000000289 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016612725999948452,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014480000000001159 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016412016999993284,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013699999999995938 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06364264199987701,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007815000000000003 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06463344100006907,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007131999999999639 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01911228400001619,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016629999999998313 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02629211400017084,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015180000000002136 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "757313d9ae6cdb044c5bb0bde7e1562ad80ce47a",
          "message": "progress-logger: extract from grn_index_column_diff()\n\nWe'll reuse this for other progress logs. For example, we'll use this\nfor progress log of static index construction.",
          "timestamp": "2025-11-03T23:51:02+09:00",
          "tree_id": "9df3156e86ab655e2f4fb7da00c839764f236dc4",
          "url": "https://github.com/kou/groonga/commit/757313d9ae6cdb044c5bb0bde7e1562ad80ce47a"
        },
        "date": 1762183514687,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3722501470000452,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016342999999999802 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28133533900000884,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015977000000000213 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01571077400001286,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003780000000001005 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015255368999987695,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039099999999980817 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5815759989999947,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001480000000000925 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24635829499999318,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005301000000000375 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13943028099998855,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0051370000000001 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01622883400000319,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013349999999995588 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017869190999988405,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015029999999997268 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0633465149999779,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007744000000000112 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06058956199996146,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007806999999999925 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017415989000028276,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013600000000001111 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017580681000026743,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016039999999998555 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "b6d9a35350687218c259dd0309dae653033041e8",
          "message": "progress-logger: extract from grn_index_column_diff()\n\nWe'll reuse this for other progress logs. For example, we'll use this\nfor progress log of static index construction.",
          "timestamp": "2025-11-03T23:52:04+09:00",
          "tree_id": "1ea3e845879db4f141cb5e9188cda764e6ba4a80",
          "url": "https://github.com/kou/groonga/commit/b6d9a35350687218c259dd0309dae653033041e8"
        },
        "date": 1762184162243,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3856103099998336,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01919300000000032 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.299579705999804,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021121000000000056 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015542004999815617,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000396000000000285 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015250890999936928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035000000000051656 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7251986730000226,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015299999999973668 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.247472964999929,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007849000000000009 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1444056450000062,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008155999999999913 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017394542999795704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018839999999993307 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016827312000259553,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001695999999999781 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07138896400010708,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008267999999999942 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06580631200006337,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009143999999999736 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017322583999998642,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001735999999999377 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017682413999978053,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017239999999996702 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "9e810d865bd5e96d17653bca108fb33fa12710f1",
          "message": "progress-logger: extract from grn_index_column_diff()\n\nWe'll reuse this for other progress logs. For example, we'll use this\nfor progress log of static index construction.",
          "timestamp": "2025-11-03T23:53:12+09:00",
          "tree_id": "b41d1ef6a1ea9f395514c3ee1a6616af2ffd69b1",
          "url": "https://github.com/kou/groonga/commit/9e810d865bd5e96d17653bca108fb33fa12710f1"
        },
        "date": 1762184424753,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3877621569999974,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020873000000000058 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2687203580000528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01319200000000012 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015647916000034456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003999999999997339 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015437562999863985,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045300000000000895 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5976025759999857,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00031299999999997996 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2491177299997389,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008428000000000005 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14135677300009775,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007621000000000044 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016715847999876132,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001621999999999818 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017448560999923757,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018939999999998125 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0667642580001484,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007415999999999742 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06556462200001079,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008150000000000185 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017993574000115586,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0021579999999998545 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019814102000054845,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018340000000002243 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "8e1461c5e54084765dfc42a8ca9d9193c1e521dc",
          "message": "progress-logger: extract from grn_index_column_diff()\n\nWe'll reuse this for other progress logs. For example, we'll use this\nfor progress log of static index construction.",
          "timestamp": "2025-11-03T23:54:26+09:00",
          "tree_id": "3f9ad705384e39c2968400e840ca7f81d809d2f6",
          "url": "https://github.com/kou/groonga/commit/8e1461c5e54084765dfc42a8ca9d9193c1e521dc"
        },
        "date": 1762184958629,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3988345999999581,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022028999999999993 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28339392699996324,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01648199999999969 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01598548699996627,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039800000000000946 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024688273999970534,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040200000000031877 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3761098509999954,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015200000000017977 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24809359499994343,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007585000000000175 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14036484300004304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005613000000000035 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01691914899998892,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015459999999998253 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.026030721999916295,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001513999999999821 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.062171156000033534,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0065929999999999045 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.062144617999990714,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007056000000000506 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018260110000028362,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001744999999999608 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01796826299988652,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017349999999999588 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "5ce1c58a3ad1b36974ed85b4ecfbbf4075514845",
          "message": "column-create: add support for progress log of index construction\n\nThe progress log's log level is debug by default. You can change it by\n`progress_log_level` option.",
          "timestamp": "2025-11-04T15:23:40+09:00",
          "tree_id": "057c2e2be1650163ed3a29f451ea528480f1ba85",
          "url": "https://github.com/kou/groonga/commit/5ce1c58a3ad1b36974ed85b4ecfbbf4075514845"
        },
        "date": 1762238154354,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36848197800009075,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01575299999999996 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2698107429999368,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01342299999999999 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01613543100006609,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042800000000009497 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015619257000082598,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041899999999997495 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7737894589999996,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00034199999999984243 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.250232565000033,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008890000000000092 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14455459100014423,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008175999999999711 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016362610999976823,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016059999999999963 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01929268799995043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014839999999999853 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06850733599992509,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009402000000000577 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06863187700002982,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008390999999999676 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01751921200002471,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001666000000000084 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.027155062999952406,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019140000000002766 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8dd020b81fb738d1195b30ba3064468ed1588979",
          "message": "doc c-api: add the missing param (#2632)\n\ngrn_tokenizer_build_func()'s parameter \"ctx\" is not documented.",
          "timestamp": "2025-11-04T11:59:10+09:00",
          "tree_id": "63f1b111c3553a9f33a3a5136fbd4e6f354c36cc",
          "url": "https://github.com/kou/groonga/commit/8dd020b81fb738d1195b30ba3064468ed1588979"
        },
        "date": 1762239670143,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4098352039999895,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021996000000000043 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2799407559999736,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015347999999999945 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01490572899996323,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040299999999995895 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015378601999941566,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034099999999989694 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.551847447,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002009999999998957 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24971064200002502,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008719000000000116 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13978459499986684,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00513399999999975 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017033497999989322,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014199999999999768 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017356110000037006,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015359999999999263 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0652640320000728,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0073339999999997435 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06395242499991127,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00789600000000093 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017371768999964843,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015339999999999243 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026604142000110187,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017559999999995635 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "688a0ec87d7759ccc827b48ab81010275d715590",
          "message": "column-create: add support for progress log of index construction\n\nThe progress log's log level is debug by default. You can change it by\n`progress_log_level` option.",
          "timestamp": "2025-11-04T15:59:51+09:00",
          "tree_id": "4dc7d873982c6111fab2b6ae42b14f34f9d68541",
          "url": "https://github.com/kou/groonga/commit/688a0ec87d7759ccc827b48ab81010275d715590"
        },
        "date": 1762240995077,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3894444080000312,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020953 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2755888979999668,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015335000000000154 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015537114000011343,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034399999999989994 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015286656999961679,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003430000000003153 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.626589241000005,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015400000000001524 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24961252299996772,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008284999999999876 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14381190399993216,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007213999999999998 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016991673999996237,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016149999999998943 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01694520800000987,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017940000000003231 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07280781299994032,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015488000000000265 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06311660000000074,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007728999999999653 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016846081999972284,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014660000000000506 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026726005999933022,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016680000000001138 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "f48b604dbfcfb6cd327707a3d45bd7dc92188b02",
          "message": "test language-model: use multilingual-e5-base\n\nIt's larger than all-MiniLM-L6-v2 but it provides better performance\nthan all-MiniLM-L6-v2.",
          "timestamp": "2025-11-04T15:57:11+09:00",
          "tree_id": "1cb87a0bcba40d83a2d9cff5bb589b3d8f49b546",
          "url": "https://github.com/kou/groonga/commit/f48b604dbfcfb6cd327707a3d45bd7dc92188b02"
        },
        "date": 1762243573961,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37989844599997014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018789000000000278 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2727094739998961,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013425000000000464 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015280981999978849,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000440000000000218 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01532799899996462,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003739999999996524 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4924406750000117,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014799999999998148 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2516724229999454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010498999999999897 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14344241499998134,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007916999999999591 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016240120000020397,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014499999999999513 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016786190999994233,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001463999999999771 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07076802100004898,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013945999999999736 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06776180400015619,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008072999999999775 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016954856000040763,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015479999999996608 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026222672000017155,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0023540000000004113 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "takuya kodama",
            "username": "otegami"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0a9d6cfaba0d8ac3db3b745efa8784048d8ca3a",
          "message": "cmake: disable GGML_CPU_ALL_VARIANTS on Windows ARM64 (#2647)\n\nGitHub: GH-2646\n\n## Issue\n\nWhen building with `GGML_CPU_ALL_VARIANTS=ON` on Windows ARM64, the\nbuild fails with:\n\n```\nCMake Error at ggml/src/CMakeLists.txt:367 (message):\n  Unsupported ARM target OS: Windows\n```\n\n## Cause\n\nllama.cpp's GGML_CPU_ALL_VARIANTS feature doesn't\nsupport Windows ARM64 yet. It only supports ARM on Linux, Android, and\nmacOS.\nEven llama.cpp's own CI explicitly disables\n`GGML_CPU_ALL_VARIANTS` for Windows ARM64 builds too.\n\nref:\nhttps://github.com/ggml-org/llama.cpp/blob/ece0f5c1771f1835e66900d4168233f0430d819d/ggml/src/CMakeLists.txt#L343-L368\nref:\nhttps://github.com/ggml-org/llama.cpp/blob/master/.github/workflows/release.yml#L288",
          "timestamp": "2025-11-12T10:21:35+09:00",
          "tree_id": "0c7370ff0d7d50b78912ef6cc50a11f69e9a91fe",
          "url": "https://github.com/kou/groonga/commit/f0a9d6cfaba0d8ac3db3b745efa8784048d8ca3a"
        },
        "date": 1763088198069,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3893897370001014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02015699999999962 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2892979379999474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015443999999999763 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016608400999928108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005150000000000154 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015357624999978725,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004139999999998867 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7252739680000104,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015499999999987746 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24992373999987194,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010091000000000239 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14245780500004912,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007523000000000113 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016343952999989142,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015440000000001564 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016591669999911574,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001590000000000008 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06802179499987915,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008306000000000119 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06577306299999464,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00832600000000025 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017590619999964474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001468000000000469 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026242089000049873,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014439999999997788 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "42aad944568c513a3efd7225b74d7398ba3d98c9",
          "message": "test language-model: use multilingual-e5-base\n\nIt's larger than all-MiniLM-L6-v2 but it provides better performance\nthan all-MiniLM-L6-v2.",
          "timestamp": "2025-11-17T16:34:13+09:00",
          "tree_id": "80d441d6c54d1445bd2d016cce4e0e67913d9b8d",
          "url": "https://github.com/kou/groonga/commit/42aad944568c513a3efd7225b74d7398ba3d98c9"
        },
        "date": 1763365122584,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.40497066000006043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019725000000000242 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29980175199995074,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01887400000000025 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016333853000048748,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003969999999999807 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015180483999984062,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040000000000001146 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5855061839999962,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015199999999973568 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24807828900003415,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006321999999999897 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14024256999999807,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005257999999999596 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017181301000050553,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015220000000002176 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016823775000034402,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015490000000002446 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06494634100005214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008763000000000173 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06184167300006038,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007797999999999888 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0182533480000302,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001682999999999657 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026842846000079135,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017460000000002474 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ed87b34d9b9852754e3f560f8961cd00c06cf77",
          "message": "column-create: add support for progress log of index construction (#2633)\n\nThe progress log's log level is debug by default. You can change it by\n`progress_log_level` option.",
          "timestamp": "2025-11-17T16:35:50+09:00",
          "tree_id": "33446b731666cd7e1f6f2d6ba285b5b6eb74ee5c",
          "url": "https://github.com/kou/groonga/commit/9ed87b34d9b9852754e3f560f8961cd00c06cf77"
        },
        "date": 1763366460629,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38330704899996704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01784399999999997 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26790951799998197,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013106999999999813 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01560785100002704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003640000000000587 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015544323000000304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000342000000000231 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5975049760000104,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001910000000001355 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24932478899995658,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006163999999999864 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14238574400002335,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0058789999999998566 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016849785000005113,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013920000000000599 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016708382999951255,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015439999999998233 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06580360200001678,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006614999999999427 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06393379100001084,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008052000000000975 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017292210999954705,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016070000000002471 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01820435899998074,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016149999999997555 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "2a6f93df519e21d60e74f3715bdbca7f23442f57",
          "message": "language-model-knn: add support for progress log",
          "timestamp": "2025-11-17T17:55:25+09:00",
          "tree_id": "36f3e0e39ed6f41d7c14f1bf5015601e7425f0b3",
          "url": "https://github.com/kou/groonga/commit/2a6f93df519e21d60e74f3715bdbca7f23442f57"
        },
        "date": 1763370029062,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35911013999992747,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01915600000000013 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.290787741000031,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02180900000000008 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016242606999981035,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044399999999999995 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015425480000033076,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040899999999965964 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.708153129999971,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001999999999995894 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22807741200000464,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008287000000000114 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13247795300009102,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007874999999999827 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016867426000089836,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016270000000001283 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016527622000012343,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001378999999999797 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06507705900008887,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00825399999999979 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06631130900007065,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00812399999999966 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018432256000039615,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017229999999997248 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018177169000068716,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017590000000003714 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "9ab662a53c9aacdb64fc5f203acfd291c26448b4",
          "message": "test language-model: use multilingual-e5-base\n\nIt's larger than all-MiniLM-L6-v2 but it provides better performance\nthan all-MiniLM-L6-v2.",
          "timestamp": "2025-11-17T17:57:19+09:00",
          "tree_id": "58cace5353ceacea3692ca97bb40cd7aa486c55c",
          "url": "https://github.com/kou/groonga/commit/9ab662a53c9aacdb64fc5f203acfd291c26448b4"
        },
        "date": 1763370264711,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3937777930000266,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020876000000000144 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2982227250000733,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020158000000000093 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015720417999943948,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004070000000004903 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02305939800004353,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004020000000002355 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4754127420000032,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00032599999999993745 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2445534169999064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0060360000000000275 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1419459729999062,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005522999999999917 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01731148200002508,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001498999999999806 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.018437162999987322,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001547999999999966 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0642070729999773,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007601999999999817 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06454052300000512,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00833399999999998 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018041917000005014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016139999999998655 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.021191389000023264,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017760000000000276 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "dffd26357843b1d2fff3fc18bb8de52d5c5a8109",
          "message": "language-model-knn: add support for progress log",
          "timestamp": "2025-11-17T18:01:49+09:00",
          "tree_id": "918be7737b13a3f4bc08e61e0b31b401189b0544",
          "url": "https://github.com/kou/groonga/commit/dffd26357843b1d2fff3fc18bb8de52d5c5a8109"
        },
        "date": 1763370572357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3790862280000056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022635999999999573 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2987422329998992,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02182999999999971 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016995064000013826,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005040000000000044 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.0157232270000236,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004100000000002435 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.845977081000001,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000187000000000076 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2304496419999964,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009498999999999896 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1365671499999337,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008402999999999772 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01950047499997254,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002244000000000107 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01763350799998875,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019480000000002273 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06788520200001358,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008810999999999708 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06822299299994938,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009291999999999773 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018079052999979695,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018539999999998558 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0190466020000315,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0022739999999998317 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "7ce6459059246b66923b6c9908c86ebf6e959609",
          "message": "language-model-knn: add support for progress log",
          "timestamp": "2025-11-17T18:05:55+09:00",
          "tree_id": "5dfbeb00026a95780cf5abca68dad5a9f88dc8a7",
          "url": "https://github.com/kou/groonga/commit/7ce6459059246b66923b6c9908c86ebf6e959609"
        },
        "date": 1763371982978,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3531331469999657,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014974999999999877 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2499304860000109,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010992999999999975 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01556262099998662,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0002930000000003208 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013509380999977338,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003450000000004838 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5304789770000014,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00013099999999996448 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.19832961399998794,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005659999999999943 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11034543600007396,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00495300000000011 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016642127999972445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012670000000000181 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014723399000018844,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013800000000002977 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05952755100000218,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00640200000000006 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05457877100002406,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007085999999999343 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01786900800001945,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012700000000004652 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.027473700999991024,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012850000000003414 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "b309c3a381a357804bfbe747aacbaaf4e4dbee4c",
          "message": "test language-model: use multilingual-e5-base\n\nIt's larger than all-MiniLM-L6-v2 but it provides better performance\nthan all-MiniLM-L6-v2.",
          "timestamp": "2025-11-17T18:41:07+09:00",
          "tree_id": "f03a909e60800b2f7ba02d6ed517d195f4c8da61",
          "url": "https://github.com/kou/groonga/commit/b309c3a381a357804bfbe747aacbaaf4e4dbee4c"
        },
        "date": 1763373251409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38742081300000564,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021281999999999787 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2798751400000583,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015173999999999799 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01597549300004175,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039800000000000946 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01507530399993584,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003169999999999562 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5469466179999927,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015999999999996573 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25964916699996365,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006980000000000042 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1393558079998911,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005413000000000057 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01640096000005542,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015010000000001689 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01703610099997377,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001670999999999978 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06592970300005163,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008007999999999932 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06624280899995938,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007280000000000286 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017854410000040843,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015519999999999146 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019307969000010416,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001701999999999787 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "c027929be3240cff8542ae94fa0595039796f12c",
          "message": "test language-model: use multilingual-e5-base\n\nIt's larger than all-MiniLM-L6-v2 but it provides better performance\nthan all-MiniLM-L6-v2.",
          "timestamp": "2025-11-18T10:37:46+09:00",
          "tree_id": "7931f9db6ab6247af99198d212cdaaf57a37580e",
          "url": "https://github.com/kou/groonga/commit/c027929be3240cff8542ae94fa0595039796f12c"
        },
        "date": 1763430313088,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36790251100001115,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016215000000000174 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2977783970000587,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02095000000000022 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015109126000083961,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003769999999998497 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020723417000056088,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005549999999995003 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5672034929999654,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016600000000002724 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24877357000002576,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00829800000000007 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1413348819999669,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006084000000000006 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017177479999986645,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001579999999999776 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.026103670000054535,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016710000000002556 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06545759900001258,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008384000000000391 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0652995349998946,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007573999999999331 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017989783000075477,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017210000000003056 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01814084299996921,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018249999999999378 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "949b5cae9b734e2caac8fab4538e5fd2a5fd66de",
          "message": "test language-model: use multilingual-e5-base\n\nIt's larger than all-MiniLM-L6-v2 but it provides better performance\nthan all-MiniLM-L6-v2.",
          "timestamp": "2025-11-18T10:42:53+09:00",
          "tree_id": "96ae1db8692f4b798918ad59cf99a05f34a6ff3c",
          "url": "https://github.com/kou/groonga/commit/949b5cae9b734e2caac8fab4538e5fd2a5fd66de"
        },
        "date": 1763431036084,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3690567179999107,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016424999999999898 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29208306900002867,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01880599999999963 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016040600999986054,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003969999999999807 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015319683000029727,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003299999999999692 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7564406889999873,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00031499999999987094 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25155116100000896,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01001799999999986 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14126613300001623,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005913000000000251 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01713358300003165,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016489999999999283 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01681878200000142,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015769999999999396 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06629011700002252,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007591999999999752 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0652537949999612,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008125999999999217 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01454796599995234,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015509999999999136 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026612031999974306,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015840000000005017 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "fbf99d132b1cb460a70f8b079203bd07029fe818",
          "message": "test language-model: use multilingual-e5-base\n\nIt's larger than all-MiniLM-L6-v2 but it provides better performance\nthan all-MiniLM-L6-v2.",
          "timestamp": "2025-11-18T12:09:12+09:00",
          "tree_id": "db7f8ea03133e20a79d0d9fb9dc876cd4b0e92f0",
          "url": "https://github.com/kou/groonga/commit/fbf99d132b1cb460a70f8b079203bd07029fe818"
        },
        "date": 1763437631813,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3978465860000142,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02221199999999987 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2816831030000344,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016225999999999963 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015152758999988691,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040699999999976866 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01550861599994846,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042100000000017124 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7315873089999911,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001570000000001015 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2502295979999758,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008790999999999882 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14301211799997304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007711000000000051 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01700695700000665,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001737999999999823 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017010842000047433,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016130000000003086 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06604847299993821,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00848100000000003 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06767509899995616,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008771000000000417 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01680922999997847,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016240000000006805 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017685938999989048,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017099999999999616 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "4091e8d57217bf7c539d8a154d2dbb64297b0f73",
          "message": "language-model-knn: add support for progress log",
          "timestamp": "2025-11-18T15:04:09+09:00",
          "tree_id": "ac62b7bf8f469e3a824269a73e1632d44fae8f74",
          "url": "https://github.com/kou/groonga/commit/4091e8d57217bf7c539d8a154d2dbb64297b0f73"
        },
        "date": 1763446067317,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35241904300005444,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017105999999999677 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2771157479996873,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01841999999999991 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015562231000558313,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004249999999995646 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.0152292899999793,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003590000000003035 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.660863762999952,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001469999999996474 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22448297800019645,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00857299999999983 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1289036240000314,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005616999999999983 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017127160999962143,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015610000000003676 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01693766800008234,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001743999999999829 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.063061523999977,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008756999999999945 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06244512699981897,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007408000000000331 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017295178999575,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017199999999997218 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02702524099981929,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019400000000003859 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "abe@clear-code.com",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c95e184d4d9b5db44237b6a65549dac811d4314b",
          "message": "language_model_knn: support `k` option (#2640)\n\nSpecify the number of records to return using `k` option.",
          "timestamp": "2025-11-19T13:33:08+09:00",
          "tree_id": "71e708d5f31ee8bc3033da0c904c70c9212cbb02",
          "url": "https://github.com/kou/groonga/commit/c95e184d4d9b5db44237b6a65549dac811d4314b"
        },
        "date": 1763618462704,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3695098530000678,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01791200000000022 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2578910239999459,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012858000000000341 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01470153900004334,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003790000000001015 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015335896999999932,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042000000000008697 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.47092153899996,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015199999999987446 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2251921209997363,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005888999999999978 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1293862799997214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005644999999999456 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01613916300004803,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001505000000000034 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.0166475039998204,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014980000000006655 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061674569000047086,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006863000000000008 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06422358600025291,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006933999999999718 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.008436931000005643,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014150000000000829 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.022070911000128035,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015750000000000486 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "7996a6d4a7d407bf18447701f011ffbf60b63752",
          "message": "TokenLanguageModelKNN: add \"centroid_column\" option\n\nIt's for large (1025+ dimensions == 4100+ bytes) embeddings. Groonga's\ntable key must be less or equal than 4KiB. If an embedding is larger\nthan 4KiB, we can't store the embedding as table key.\n\nYou can use this option for the case. You can store embeddings to\ncolumn value not table key. So you can use larger embeddings.",
          "timestamp": "2025-11-20T22:47:27+09:00",
          "tree_id": "d8c5e716b54308e79f083882b93727085a887d06",
          "url": "https://github.com/kou/groonga/commit/7996a6d4a7d407bf18447701f011ffbf60b63752"
        },
        "date": 1763646680036,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35442871000000764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017069000000000084 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2755298510000159,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01699699999999993 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015067058999989058,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034300000000020425 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.023930350000000544,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000378000000000267 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4521144530000072,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014499999999997848 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22362966700003994,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008155999999999913 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1294357170000353,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005638999999999755 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016824679999984937,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016340000000001076 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016540429000002632,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013370000000001436 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06089796799994929,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006238000000000396 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06427683499998693,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006276000000000059 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017582816000043522,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014689999999993042 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017380311000039228,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016969999999998653 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b8940918637d6f54546d4991d5ba96f74d5a737",
          "message": "doc install amazonlinux: Remove the install procudere of groonga-token-mecab package (#2535)\n\nBecause we don't provide the groonga-tokenizer-mecab package in Amazon Linux 2023.",
          "timestamp": "2025-11-25T14:46:24+09:00",
          "tree_id": "ca7ffea6ce0338807194cd19b3df0224af02b29a",
          "url": "https://github.com/kou/groonga/commit/5b8940918637d6f54546d4991d5ba96f74d5a737"
        },
        "date": 1764054909528,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3524253539999904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015376000000000223 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.25781854299995643,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012536000000000186 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015546855999957643,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004010000000000957 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015813445999981468,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038399999999999546 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.607005966999992,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00022999999999995246 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22251048699999387,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00704999999999989 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1312178940000024,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006353000000000303 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01674335499998847,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001643999999999951 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017229283000006035,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015230000000003296 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06665366299995412,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008814999999999962 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06852208899999823,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008457000000000131 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017975304999993114,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017379999999999063 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026905507000009266,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016539999999993782 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "dc775a80261a048c0d2f600629b1a1eefec99654",
          "message": "pat: fix a bug that `check_max` is overflowed with 4096 bytes key\n\nGitHub: fix pgroonga/pgroonga#901\n\nWe can't use `uint16_t` for `check_max` because it's `65536` when key\nsize is 4096 bytes.\n\nIf `check_max` is overflowed, it may create a patricia trie that\ndoesn't return consistent sorted keys. This may break index built by\nstatic index construction. Because our static index construction\ndepends on consistent sorted keys. See also:\nhttps://github.com/groonga/groonga/blob/5b8940918637d6f54546d4991d5ba96f74d5a737/lib/ii.cpp#L16494-L16500\n\nReported by lilydjwg. Thanks!!!",
          "timestamp": "2025-11-25T16:37:48+09:00",
          "tree_id": "42c8262296d956ba00febeab93d51f9216c5d94d",
          "url": "https://github.com/kou/groonga/commit/dc775a80261a048c0d2f600629b1a1eefec99654"
        },
        "date": 1764056584247,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3683169490000182,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020671999999999816 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.25806501000002413,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012813000000000185 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0160997070000235,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040900000000032577 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01569150899999272,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004380000000000217 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4141601560000083,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00028400000000000647 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22024322999993728,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006527999999999867 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13361054100005276,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007582999999999812 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01692428499998755,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015769999999998563 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01730941799996799,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001532999999999951 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06299070400004325,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007114000000000037 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.064018295000011,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0073250000000006366 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017292527999956064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015870000000002271 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02628092600002674,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016069999999998308 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "66c9cb29348871d4cb6d52d4c0dcb2d96aeee107",
          "message": "pat: fix a bug that `check_max` is overflowed with 4096 bytes key\n\nGitHub: fix pgroonga/pgroonga#901\n\nWe can't use `uint16_t` for `check_max` because it's `65536` when key\nsize is 4096 bytes.\n\nIf `check_max` is overflowed, it may create a patricia trie that\ndoesn't return consistent sorted keys. This may break index built by\nstatic index construction. Because our static index construction\ndepends on consistent sorted keys. See also:\nhttps://github.com/groonga/groonga/blob/5b8940918637d6f54546d4991d5ba96f74d5a737/lib/ii.cpp#L16494-L16500\n\nReported by lilydjwg. Thanks!!!",
          "timestamp": "2025-11-25T16:41:08+09:00",
          "tree_id": "e5efdbea41d2206946d5934ff39c812b235ad358",
          "url": "https://github.com/kou/groonga/commit/66c9cb29348871d4cb6d52d4c0dcb2d96aeee107"
        },
        "date": 1764058016181,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37353067099996906,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02236499999999994 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.258642449000007,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013000999999999763 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015554828999995607,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003830000000000222 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015555684000020165,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003280000000000227 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5962606909999977,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015800000000026904 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2220836760000111,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007635000000000239 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1334303499998839,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009125999999999856 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01729389799999126,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017709999999998283 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016965518999995766,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001677999999999763 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061519081000056985,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006958000000000325 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0636196430000382,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007638999999999979 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017832752000003893,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001612000000000391 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017736180999975204,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015580000000000316 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@cozmixng.org",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7523f3fa7ffe71909da573113a64dcfaada97de3",
          "message": "Fix a typo\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2025-11-25T20:30:42+09:00",
          "tree_id": "c274deaaa4cf95329f3b0ce72157391b45cd0aa2",
          "url": "https://github.com/kou/groonga/commit/7523f3fa7ffe71909da573113a64dcfaada97de3"
        },
        "date": 1764070439422,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.34533322900000485,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015316000000000024 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2572497649999548,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012676999999999716 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014685329999991836,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000384000000000162 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014969764999989366,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031199999999997896 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5468235929999992,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015700000000001824 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22206340800002522,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007899999999999935 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13035109699995928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006076999999999971 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017100246000012476,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015899999999999803 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01652570799998898,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014850000000001251 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06429677699998138,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007865000000000191 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06748044700003675,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008483000000001156 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018336706000042113,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016590000000003269 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017274421999985634,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013890000000000013 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "takuya kodama",
            "username": "otegami"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "781d243cc905cedb770a39f6cab072d3daa28662",
          "message": "windows: fix compilation errors on ARM64 (#2653)\n\n## Issue\n\nCompilation fails on ARM64 Windows CI with the following error:\n\n```\nlib/windows.c:408:4: error: \"Intel x86, Intel Itanium and x64 are only supported architectures\"\n  408 | #  error \"Intel x86, Intel Itanium and x64 are only supported architectures\"\n      |    ^\n1 error generated.\n```\n\n## Cause\n\nThe stack walking code in `lib/windows.c` only supports Intel x86, Intel\nItanium, and x64 architectures. ARM64 architecture was not recognized.\n\n## Solution\n\nAdd support for the `_M_ARM64` compiler macro and\nconfigure the StackWalk64 API with ARM64-specific\nregisters. msys2 packages use the same approach:\n\n- `Pc` (Program Counter)\n- `Fp` (Frame Pointer)\n- `Sp` (Stack Pointer)\n\nref:\nhttps://github.com/msys2/MINGW-packages/blob/master/mingw-w64-groonga/001-aarch64.patch\nref:\nhttps://developer.arm.com/documentation/102374/0103/Registers-in-AArch64---other-registers\nref:\nhttps://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-arm64_nt_context\n\nAlso update the error message to include ARM64 in the list of supported\narchitectures.",
          "timestamp": "2025-11-26T08:39:58+09:00",
          "tree_id": "cb2336fef21ac872c485e81d07d4ee512a129255",
          "url": "https://github.com/kou/groonga/commit/781d243cc905cedb770a39f6cab072d3daa28662"
        },
        "date": 1764140384904,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3481431809999833,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017265000000000252 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2606217930000412,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013579999999999676 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01633289700001228,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004019999999999857 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01526335799997014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040699999999982417 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.716573761999996,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019199999999999773 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22424452899997505,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00951299999999998 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13299207899990506,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007111999999999841 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01667755699997997,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019209999999998117 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017249151999976675,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019369999999996057 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07028251000008368,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013877999999999849 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06698951199990688,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008274999999999644 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01816597799995634,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017089999999996552 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026906588000031206,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018389999999998963 s\nthreads: undefined"
          }
        ]
      }
    ]
  }
}