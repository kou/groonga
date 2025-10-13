window.BENCHMARK_DATA = {
  "lastUpdate": 1760363406271,
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
      }
    ]
  }
}