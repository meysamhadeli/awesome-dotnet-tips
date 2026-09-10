# VLLM

## 📘 Resources

- [vllm-project/vllm](https://github.com/vllm-project/vllm) - A high-throughput and memory-efficient inference and serving engine for LLMs

## 📕 Articles

- [vLLM Docker Deployment: Production-Ready Setup Guide (2026)](https://inference.net/content/vllm-docker-deployment/)
- [How to Run LLM Inference with vLLM in Docker](https://oneuptime.com/blog/post/2026-02-08-how-to-run-llm-inference-with-vllm-in-docker/view)

## 🚀 Samples

- [thc1006/qwen3.6-vllm-2x3090](https://github.com/thc1006/qwen3.6-vllm-2x3090) - Empirical bench: can vLLM continuous batching on 2x RTX 3090 serve concurrent vision+dialog for an embodied robot? (Spoiler: yes, 4.3% dialog degradation under load with full unified qwen3.6 quality)
- [syv-ai/qwen38-27b-rtx3090](https://github.com/syv-ai/qwen38-27b-rtx3090) - Qwen3.8-27B on a single RTX 3090 with vLLM: ~1,000 tok/s at 64 concurrent (int8 tensor-core GEMMs, fp16 DeltaNet state), ~114 tok/s single-user at default sampling / ~124 greedy (MTP drafts, own-output draft vocab, calibrated int4 lm_head, split-KV verify attention), 150k-262k context; patches, requant scripts, benchmarks
- [alesha-pro/4x3090-llm-benchmarks](https://github.com/alesha-pro/4x3090-llm-benchmarks) - Local LLM speed measurements from a 4x RTX 3090 rig, with exact launch commands and per-run provenance.
- [pajitosingh/vllm-qwen-launcher](https://github.com/pajitosingh/vllm-qwen-launcher) - Qwen3.6 vLLM Toolkit — Launcher + Templates, Optimized for 2×24 GB. vLLM launcher with an optimized hybrid chat template drawing from the best community fixes for Qwen 3.6 27B.
- [alesha-pro/qwen38-flash-next-4x3090](https://github.com/alesha-pro/qwen38-flash-next-4x3090) - Qwen3.8-Flash-Next W4A16 + FP8 PLE + calibrated FP8 QSA KV on 4x RTX 3090
- [syv-ai/qwen38-27b-rtx3090](https://github.com/syv-ai/qwen38-27b-rtx3090) ⭐ - Qwen3.8-27B on a single RTX 3090 with vLLM: ~1,000 tok/s at 64 concurrent (int8 tensor-core GEMMs, fp16 DeltaNet state), ~114 tok/s single-user at default sampling / ~124 greedy (MTP drafts, own-output draft vocab, calibrated int4 lm_head, split-KV verify attention), 150k-262k context; patches, requant scripts, benchmarks
- [vllm-project/production-stack](https://github.com/vllm-project/production-stack) - vLLM’s reference system for K8S-native cluster-wide deployment with community-driven performance optimization


