/*
 * The full project archive. Every entry backs a real, built project inside
 * the learning/ portfolio repo. Tracks match the six job tracks: ai, data,
 * quant, hardware, health, product. Keep titles clean, no folder numbers,
 * since those are internal build bookkeeping, not public-facing.
 */

const GH = "https://github.com/K-Divyasri/";

const PROJECTS = [
  // ---- AI Engineer -----------------------------------------------------
  { title: "Data Detective", track: "ai", desc: "CSV profiling CLI that reports stats, missing data and charts, with an optional LLM summary.", tags: ["Python", "Pandas", "CLI"], repo: GH + "01-data-detective" },
  { title: "Prompt Engineering Lab", track: "ai", desc: "Scores five prompting styles on the same ticket classification task: zero shot, few shot, chain of thought, role and forced JSON.", tags: ["Prompting", "Evaluation"], repo: GH + "03-prompt-engineering-lab" },
  { title: "Document Summarizer", track: "ai", desc: "MapReduce summarizer for documents too long to fit in one context window.", tags: ["LLM", "Chunking"], repo: GH + "04-document-summarizer" },
  { title: "Structured Data Extractor", track: "ai", desc: "Extracts and validates structured resume fields with Pydantic, served through an API.", tags: ["Pydantic", "FastAPI"], repo: GH + "05-structured-data-extractor" },
  { title: "Embeddings Explorer", track: "ai", desc: "Semantic search, clustering and a 2D map of sentence embeddings.", tags: ["Embeddings", "Clustering"], repo: GH + "07-embeddings-explorer" },
  { title: "Chat With Your PDF", track: "ai", desc: "Classic RAG built from scratch: PDF question answering with page level citations.", tags: ["RAG", "PDF"], repo: GH + "08-chat-with-your-pdf" },
  { title: "Production RAG Platform", track: "ai", desc: "Hybrid BM25 and vector search with reciprocal rank fusion and cross encoder reranking, serving FastAPI.", tags: ["Qdrant", "Hybrid Search", "FastAPI"], metric: "Retrieval MRR 0.472 to 0.933", featured: true, repo: GH + "09-rag-real-knowledge-base" },
  { title: "RAG Evaluation Harness", track: "ai", desc: "Scores a RAG system on five metrics and fails the build on a quality regression.", tags: ["Evaluation", "CI"], metric: "46 tests, CI ship gate", repo: GH + "10-rag-evaluation-harness" },
  { title: "Function Calling Assistant", track: "ai", desc: "From scratch tool calling agent built on a reason, act, observe loop.", tags: ["Agents", "Tool Use"], repo: GH + "11-function-calling-assistant" },
  { title: "ReAct Research Agent", track: "ai", desc: "Research agent that grounds every answer in a citation instead of a guess.", tags: ["Agents", "Grounding"], repo: GH + "12-react-research-agent" },
  { title: "Multi Agent Content Team", track: "ai", desc: "Researcher, Writer and Editor agents orchestrated as a state machine with a revision loop.", tags: ["Multi Agent", "Orchestration"], repo: GH + "13-multi-agent-content-team" },
  { title: "SQL Agent", track: "ai", desc: "Text to SQL agent with read only safety guardrails.", tags: ["Agents", "SQL"], repo: GH + "14-sql-agent" },
  { title: "Guardrails Safety Layer", track: "ai", desc: "Blocks prompt injection and PII leaks for a bank chatbot, proven with a red team suite.", tags: ["Safety", "Red Team"], metric: "19/19 attacks handled", repo: GH + "17-guardrails-safety-layer" },
  { title: "CI/CD Cloud Deployment", track: "ai", desc: "Pipeline that tests, builds and deploys a summarization API to the cloud on every push.", tags: ["CI/CD", "Docker"], repo: GH + "18-cicd-cloud-deployment" },
  { title: "Fine Tuning: LoRA vs Prompting", track: "ai", desc: "Compares head only, full fine tune and LoRA against plain prompting and RAG on the same task.", tags: ["LoRA", "PEFT"], repo: GH + "19-fine-tuning-lora" },
  { title: "VisionQA (Multimodal App)", track: "ai", desc: "Vision question answering that contrasts offline pixel math with real vision model understanding, honestly showing where the heuristic misses.", tags: ["Multimodal", "Vision"], repo: GH + "20-multimodal-app" },
  { title: "Semantic Search Recommender", track: "ai", desc: "Movie recommender with A/B tested ranking strategies.", tags: ["Recommenders", "A/B Testing"], repo: GH + "21-semantic-search-recommender" },
  { title: "MCP Server and Client", track: "ai", desc: "Real Model Context Protocol server exposing a notes database and live weather, wired into a Claude Desktop client over stdio and HTTP.", tags: ["MCP", "Protocol"], metric: "40 tests, live Claude Desktop demo", repo: GH + "24-mcp-server-client" },
  { title: "LLM Cost Optimizer", track: "ai", desc: "Routes requests between cheap and frontier models with a semantic cache in front.", tags: ["Routing", "Semantic Cache"], metric: "56% cost cut, full accuracy kept", repo: GH + "26-llm-cost-optimizer" },
  { title: "Browser Use Safety Agent", track: "ai", desc: "Browser controlling agent sandboxed with an action allowlist and a destructive pattern denylist, audited by a red team suite.", tags: ["Playwright", "Agent Safety"], metric: "13/13 red team", repo: GH + "28-browser-use-safety-agent" },
  { title: "LLM Red Team Jailbreak Benchmark", track: "ai", desc: "Larger OWASP scored attack corpus aimed back at the guardrail layer and the tool calling agent.", tags: ["Red Team", "OWASP LLM Top 10"], metric: "45% to 90% blocked after hardening", repo: GH + "36-llm-redteam-jailbreak-benchmark" },
  { title: "On Device SLM Benchmark", track: "ai", desc: "Local quantized model benchmarked against a frontier API on latency, cost and honest accuracy.", tags: ["Quantization", "Edge AI"], metric: "local: confidently wrong on every hard query", repo: GH + "36-on-device-slm-benchmark" },
  { title: "Repo Aware Codebase Agent", track: "ai", desc: "Code agent that reads a real repository, runs its tests and proposes a verified diff instead of a guess.", tags: ["Code Agents", "AST"], repo: GH + "36-repo-aware-codebase-agent" },
  { title: "Cross Session Agent Memory", track: "ai", desc: "Agent memory that survives a full process restart, following the working, episodic, semantic and procedural taxonomy.", tags: ["Memory", "CoALA"], metric: "42/42 tests, incl. kill mid session", featured: true, repo: GH + "37-cross-session-agent-memory" },
  { title: "Agent Trajectory Eval Harness", track: "ai", desc: "Scores an entire agent transcript, tool calls and all, instead of only the final answer.", tags: ["Evaluation", "LLM as Judge"], metric: "44 tests, 5 seeded failure modes", repo: GH + "38-agent-trajectory-eval-harness" },

  // ---- Data Engineer -----------------------------------------------------
  { title: "CSV to Database ETL", track: "data", desc: "Cleans a messy sales CSV and loads it into a database as a first real ETL.", tags: ["ETL", "SQL"], repo: GH + "01_csv_to_db_etl" },
  { title: "API to Data Lake: Weather", track: "data", desc: "Pulls hourly weather from an API into a partitioned Parquet data lake.", tags: ["API", "Parquet"], repo: GH + "03_api_to_datalake_weather" },
  { title: "Dockerized Pipeline", track: "data", desc: "Containerizes the CSV ETL pipeline so it runs the same way anywhere.", tags: ["Docker"], repo: GH + "04_dockerize_pipeline" },
  { title: "dbt Analytics Engineering", track: "data", desc: "Turns raw ecommerce data into tested, documented dbt marts.", tags: ["dbt", "Data Modeling"], repo: GH + "05_dbt_analytics_engineering" },
  { title: "Airflow Orchestrated Pipeline", track: "data", desc: "Rebuilds the weather pipeline as a scheduled, retry aware Airflow DAG.", tags: ["Airflow"], repo: GH + "06_airflow_orchestrated_pipeline" },
  { title: "End to End ELT", track: "data", desc: "Crypto API to warehouse to dbt to dashboard, the whole chain.", tags: ["ELT", "dbt", "Streamlit"], repo: GH + "07_end_to_end_elt" },
  { title: "PySpark at Scale", track: "data", desc: "Processes ten million plus rows with distributed joins and window functions.", tags: ["PySpark", "Big Data"], repo: GH + "08_pyspark_big_data" },
  { title: "Data Quality Framework", track: "data", desc: "Pandera based quality gate with freshness, volume and schema drift checks that quarantines bad rows instead of crashing.", tags: ["Pandera", "Data Quality"], repo: GH + "09_data_quality_framework" },
  { title: "CI/CD for Data Pipelines", track: "data", desc: "GitHub Actions pipeline that tests, lints and builds dbt on every change.", tags: ["CI/CD", "dbt"], repo: GH + "10_cicd_data_pipelines" },
  { title: "Kafka Streaming", track: "data", desc: "Producer and consumer pipeline streaming near real time aggregations.", tags: ["Kafka", "Streaming"], repo: GH + "11_realtime_streaming_kafka" },
  { title: "AWS Data Lake", track: "data", desc: "Serverless data lake on S3, Glue and Athena.", tags: ["AWS", "S3", "Glue", "Athena"], repo: GH + "12_aws_data_lake" },
  { title: "Infrastructure as Code: Terraform", track: "data", desc: "Provisions an AWS S3 and Glue data lake as Terraform code instead of clicking through consoles.", tags: ["Terraform", "IaC"], repo: GH + "13_infrastructure_as_code_terraform" },
  { title: "Snowflake and dbt Warehouse", track: "data", desc: "Snowflake warehouse with a dbt star schema, showing off time travel and zero copy cloning.", tags: ["Snowflake", "dbt"], repo: GH + "14_snowflake_dbt_warehouse" },
  { title: "CDC Pipeline", track: "data", desc: "Change data capture that syncs only what changed into a warehouse, watermark and log based both covered.", tags: ["CDC", "Debezium", "Kafka"], repo: GH + "16_cdc_pipeline" },
  { title: "Web Scraping Pipeline", track: "data", desc: "Scrapes, cleans and loads web data on a schedule, responsibly.", tags: ["Scraping", "Scheduling"], repo: GH + "17_web_scraping_pipeline" },
  { title: "Kafka and Spark Streaming", track: "data", desc: "Kafka feeding Spark Structured Streaming with event time windowing.", tags: ["Kafka", "Spark"], repo: GH + "18_kafka_spark_streaming" },
  { title: "Lakehouse: Delta and Iceberg", track: "data", desc: "Adds ACID transactions and time travel on top of plain Parquet.", tags: ["Delta Lake", "Iceberg"], repo: GH + "19_lakehouse_delta_iceberg" },
  { title: "GCP Serverless Pipeline", track: "data", desc: "Cloud Function, BigQuery and Cloud Scheduler, fully serverless.", tags: ["GCP", "BigQuery"], repo: GH + "20_gcp_serverless_pipeline" },
  { title: "Data Observability", track: "data", desc: "Metrics, anomaly checks and alerts wrapped around a daily ETL.", tags: ["Observability"], repo: GH + "21_data_observability" },
  { title: "Kubernetes Data Service", track: "data", desc: "FastAPI data service containerized and deployed to Kubernetes with autoscaling.", tags: ["Kubernetes", "FastAPI"], metric: "2 to 6 replica autoscaling", repo: GH + "22_kubernetes_data_service" },
  { title: "CDC to Vector Freshness Pipeline", track: "data", desc: "Change data capture feeding a vector database, with a staleness dashboard keeping the RAG side honest.", tags: ["CDC", "Qdrant", "RAG"], repo: GH + "25_cdc_vector_freshness_pipeline" },
  { title: "Data Contract Enforcement Gateway", track: "data", desc: "Schema compatibility gate that blocks a breaking Avro or Protobuf change before it ever reaches Kafka.", tags: ["Kafka", "Schema Registry"], metric: "29 tests, CI gated", featured: true, repo: GH + "25_data_contract_enforcement_gateway" },
  { title: "Semantic Layer and Reverse ETL", track: "data", desc: "One metric defined once through dbt MetricFlow, cross checked against Cube, then pushed out through reverse ETL.", tags: ["dbt MetricFlow", "Reverse ETL"], metric: "Killed a 23.6x metric drift bug", repo: GH + "25_semantic_layer_reverse_etl" },
  { title: "Warehouse FinOps Dashboard", track: "data", desc: "Prices dbt models straight from real lineage and byte sizes, flagging the ones quietly wasting money.", tags: ["FinOps", "dbt"], metric: "Found a 94x view vs incremental cost gap", repo: GH + "25_warehouse_finops_dashboard" },
  { title: "Real Time Feature Store", track: "data", desc: "Feast feature store fixing a real train and serve skew problem with point in time correct joins.", tags: ["Feast", "MLOps"], metric: "Accuracy recovered from 0.263 to 0.842", repo: GH + "26_realtime_feature_store_ml" },
  { title: "Pipeline Lineage Graph", track: "data", desc: "OpenLineage and Marquez lineage graph that answers what actually breaks if a column changes.", tags: ["OpenLineage", "Marquez"], repo: GH + "30_pipeline_lineage_graph" },
  { title: "LLM Assisted dbt Generator", track: "data", desc: "LLM drafts dbt staging models and tests grounded in a business glossary, with a human review gate before anything ships.", tags: ["LLM", "dbt"], metric: "Bug catch recall 50% to 100%", repo: GH + "31_llm_dbt_generator" },

  // ---- Quant ---------------------------------------------------------
  { title: "Pairs Trading Stat Arb Engine", track: "quant", desc: "Cointegration and a Kalman filter hedge ratio, gated by an LLM that reads news and vetoes trades around structural breaks.", tags: ["Cointegration", "Kalman Filter"], metric: "Max drawdown cut 68%", featured: true, repo: GH + "01-pairs-trading-statarb" },
  { title: "Options Greeks and Vol Surface Cockpit", track: "quant", desc: "Black Scholes, binomial and Monte Carlo pricing with a neural net surrogate standing in for slow surface revaluation.", tags: ["Options", "Vol Surface"], metric: "~100x faster revaluation", repo: GH + "02-options-greeks-vol-surface" },
  { title: "Low Latency Market Data Engine", track: "quant", desc: "C++20 UDP order book sustaining six figure updates per second at sub microsecond tick to decision latency.", tags: ["C++20", "Order Book"], metric: "100k+ updates/sec, ~250ns P50", featured: true, repo: GH + "market-engine-deploy" },
  { title: "Market Making Engine", track: "quant", desc: "Avellaneda Stoikov inventory aware quoting benchmarked against a naive spread.", tags: ["Market Making", "Inventory Risk"], metric: "Inventory risk down ~60%", repo: GH + "37-market-making-avellaneda-stoikov" },
  { title: "Optimal Execution: RL vs Almgren Chriss", track: "quant", desc: "A trained PPO execution agent measured against a from scratch closed form optimal execution baseline.", tags: ["Reinforcement Learning", "Execution"], metric: "Within 4% of closed form optimum", repo: GH + "42-almgren-chriss-optimal-execution" },
  { title: "VaR and Expected Shortfall Engine", track: "quant", desc: "Five tail risk methods, self graded with Kupiec and Christoffersen backtests.", tags: ["Risk", "Backtesting"], repo: GH + "07-var-es-risk-engine" },
  { title: "Deflated Sharpe Ratio Auditor", track: "quant", desc: "Corrects a Sharpe ratio for the fact that most backtests quietly test far more than one strategy.", tags: ["Sharpe Ratio", "Multiple Testing"], metric: "99 of 100 strategies flagged as overfit", repo: GH + "43-deflated-sharpe-ratio-auditor" },
  { title: "Brinson Fachler Attribution", track: "quant", desc: "Decomposes portfolio return into allocation, selection and interaction effects that reconcile exactly to the total.", tags: ["Performance Attribution"], repo: GH + "41-brinson-fachler-attribution" },
  { title: "Algo Zoo Prediction Lab", track: "quant", desc: "Five forecasting models judged by a Diebold Mariano significance test instead of eyeballed accuracy.", tags: ["Forecasting", "Statistical Testing"], repo: GH + "11-algo-zoo-prediction-lab" },
  { title: "GARCH Volatility Forecasting", track: "quant", desc: "Walk forward GARCH benchmarked honestly against EWMA and rolling window baselines.", tags: ["GARCH", "Volatility"], repo: GH + "35-garch-vol-forecasting" },
  { title: "Cointegration Lead Lag Network", track: "quant", desc: "Screens a whole universe for relationships, then prunes false discoveries with Benjamini Hochberg correction.", tags: ["Cointegration", "Network Analysis"], metric: "15 raw discoveries pruned to 3", repo: GH + "36-cointegration-leadlag-network" },
  { title: "Order Book ML Alpha", track: "quant", desc: "Tests whether a machine learned edge in the limit order book survives after paying the spread.", tags: ["Order Book", "Machine Learning"], metric: "Edge flips negative after 1 tick cost", repo: GH + "24-orderbook-ml-alpha" },
  { title: "Alt Data Alpha", track: "quant", desc: "Tests whether an alternative data signal survives point in time, leakage safe validation.", tags: ["Alt Data", "Leakage"], metric: "IC 0.32 in sample, 0.10 leakage safe", repo: GH + "25-altdata-alpha" },
  { title: "Triple Barrier Signal Research", track: "quant", desc: "Purged and embargoed cross validation on real market data, following the triple barrier labeling method.", tags: ["Triple Barrier", "Purged CV"], repo: GH + "40-triple-barrier-signal-research" },
  { title: "Kaggle Quant Competition", track: "quant", desc: "Full leakage safe feature engineering and modeling workflow, run Optiver style.", tags: ["Kaggle", "Feature Engineering"], repo: GH + "38-kaggle-quant-competition" },

  // ---- Hardware --------------------------------------------------------
  { title: "Embedded Systems Practice", track: "hardware", desc: "Ten sensor, actuator and cloud telemetry exercises in simulation, from a single blinking LED up to WiFi and MQTT.", tags: ["ESP32", "Wokwi"], repo: GH + "hardware-embedded-practice" },
  { title: "Keypad Door Lock v2", track: "hardware", desc: "Keypad PIN entry, a servo bolt and an intrusion alarm state machine, with WiFi and MQTT remote unlock.", tags: ["ESP32", "State Machine", "MQTT"], metric: "42 tests, 12/12 red team", repo: GH + "11-keypad-door-lock-v2" },
  { title: "TinyML Gesture Classifier", track: "hardware", desc: "Trains and quantizes a gesture classifier small enough to run on a microcontroller.", tags: ["TinyML", "Quantization"], metric: "Float32 100% vs int8 85% accuracy", repo: GH + "12-tinyml-gesture-classifier" },
  { title: "FreeRTOS Climate Monitor", track: "hardware", desc: "Room climate monitor split across three real FreeRTOS tasks instead of one loop.", tags: ["FreeRTOS", "I2C"], repo: GH + "13-freertos-climate-monitor" },
  { title: "Battery Powered Datalogger", track: "hardware", desc: "Deep sleep data logger engineered to run for weeks on a single coin cell.", tags: ["Deep Sleep", "Power Budgeting"], metric: "~27.5 days on a CR2032", repo: GH + "14-battery-powered-datalogger" },
  { title: "Custom PCB Smart Plug", track: "hardware", desc: "Self designed two layer PCB with current sensing and an overcurrent trip state machine, taken from schematic to bring up.", tags: ["PCB Design", "KiCad", "INA219"], metric: "30 tests, 12/12 red team", featured: true, repo: GH + "14-custom-pcb-smart-plug" },
  { title: "RFID and BLE Lock v2", track: "hardware", desc: "RFID and BLE authenticated lock with an encrypted OTP fallback for when connectivity drops.", tags: ["RFID", "BLE"], repo: GH + "14-rfid-ble-lock-v2" },
  { title: "IMU Sensor Fusion Node", track: "hardware", desc: "IMU sensor fusion over a hand built framed serial protocol, streaming into a C++ host app for latency measurement.", tags: ["Kalman Filter", "C++"], metric: "Kalman beats complementary filter ~3x", repo: GH + "16-imu-sensor-fusion-node" },

  // ---- Health Tech ------------------------------------------------------
  { title: "HIPAA Deidentification Pipeline", track: "health", desc: "Safe Harbor eighteen identifier redaction with date shifting, verified leak free against a synthetic patient set.", tags: ["HIPAA", "Privacy"], metric: "2,172 redactions, zero leaks", featured: true, repo: GH + "01_hipaa_deidentification" },
  { title: "Synthetic Patient Generator", track: "health", desc: "Generates and profiles synthetic EHR populations shaped like real Synthea output.", tags: ["Synthea", "Synthetic Data"], repo: GH + "02_synthetic_patients_synthea" },
  { title: "HL7 v2 Parser", track: "health", desc: "Hand built parser for ADT and ORU messages with malformed input handling and batch to JSON conversion.", tags: ["HL7"], repo: GH + "03_hl7_v2_parser" },
  { title: "FHIR API Client", track: "health", desc: "FHIR R4 client with bundle, search and pagination handling plus a mini FHIRPath extractor, tested against a live HAPI server.", tags: ["FHIR", "REST"], repo: GH + "04_fhir_api_client" },
  { title: "Medical Code Translator", track: "health", desc: "Crosswalks ICD-10-CM, SNOMED, LOINC and CPT, with live RxNorm drug name normalization.", tags: ["ICD-10", "SNOMED", "LOINC"], repo: GH + "05_medical_code_translator" },
  { title: "HL7 to FHIR Converter", track: "health", desc: "Maps HL7 v2 ADT and ORU messages into FHIR R4 resources with LOINC coded values.", tags: ["HL7", "FHIR"], repo: GH + "06_hl7_to_fhir_converter" },

  // ---- Product Manager --------------------------------------------------
  { title: "Product Teardown", track: "product", desc: "Full teardown framework: jobs to be done, business model, core loop and RICE prioritized improvements.", tags: ["JTBD", "RICE"], repo: GH + "01_product_teardown" },
  { title: "Writing a PRD", track: "product", desc: "End to end PRD, from a problem statement through user stories to a rollout plan.", tags: ["PRD"], repo: GH + "02_write_a_prd" },
  { title: "Metrics and North Star", track: "product", desc: "North Star metric, KPI trees and AARRR framework, backed by a real synthetic data dashboard.", tags: ["Metrics", "AARRR"], repo: GH + "03_metrics_north_star" },
  { title: "Competitive Analysis", track: "product", desc: "Market mapping, feature matrices, positioning maps and TAM/SAM/SOM sizing.", tags: ["Market Sizing"], repo: GH + "04_competitive_analysis" },
  { title: "User Research", track: "product", desc: "Research planning, discussion guides and affinity mapping through to personas.", tags: ["User Research"], repo: GH + "05_user_research" },
  { title: "Prioritization and Roadmapping", track: "product", desc: "Scores a real backlog with RICE and ICE into a Now, Next, Later roadmap with a stakeholder memo.", tags: ["Roadmapping"], featured: true, repo: GH + "06_prioritization_roadmap" },
];

const TRACK_META = {
  all:     { label: "All" },
  ai:      { label: "AI Engineering" },
  data:    { label: "Data Engineering" },
  product: { label: "Product Management" },
  hardware:{ label: "Hardware" },
  quant:   { label: "Quant" },
  health:  { label: "Health Tech" },
};
