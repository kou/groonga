window.BENCHMARK_DATA = {
  "lastUpdate": 1761023359741,
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
      }
    ]
  }
}