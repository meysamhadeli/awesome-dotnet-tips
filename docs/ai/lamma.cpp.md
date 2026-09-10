# Lamma.CPP

## 📘 Resources

- [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) - LLM inference in C/C++

## 📕 Article

- [Qwen3.8-27B on One RTX 3090: 59.8% Faster with MTP—But Not Bit-Exact](https://hackmd.io/@thc1006/qwen3-8-27b-speculative-decoding-rtx-3090)
- [I made Qwen3.8-27B run 2.5× faster — Breaking 100 tok/s on a 16GB RTX 4080](https://www.linkedin.com/pulse/i-made-qwen38-27b-run-25-faster-breaking-100-toks-16gb-paul-van-liew-mcckf/)


## 📦 Libraries

- [mostlygeek/llama-swap](https://github.com/mostlygeek/llama-swap) - Reliable model swapping for any local OpenAI/Anthropic compatible server - llama.cpp, vllm, etc

## Samples & Playgrounds

- [sudoingX/qwen38-mtp](https://github.com/sudoingX/qwen38-mtp) - One llama.cpp flag unlocks +33-39% decode speed for Qwen3.8-27B on consumer GPUs. The MTP head already ships inside your GGUF. Recipe, paired benchmarks, probe tool.
- [thc1006/qwen3.6-speculative-decoding-rtx3090](https://github.com/thc1006/qwen3.6-speculative-decoding-rtx3090) - Controlled benchmark of llama.cpp speculative decoding on Qwen3.6-35B-A3B, one RTX 3090, commit 3737e4137
- [thc1006/qwen3.8-speculative-decoding-rtx3090](https://github.com/thc1006/qwen3.8-speculative-decoding-rtx3090) - Pinned llama.cpp benchmark of Qwen3.8-27B on one RTX 3090. Built-in MTP at n-max 2: +59.8% [+57.0, +62.8] server-reported decode on a purposive 25-prompt suite; DFlash2 (PR #27342) +51.9%. Telemetry suggests ~35-37% lower energy, uncalibrated. 23-25 of 25 prompts diverge from serial greedy by token 1600.
- [mikecovlee/qwen3.8-27b-24gb-recipe](https://github.com/mikecovlee/qwen3.8-27b-24gb-recipe) - Run Qwen3.8-27B locally on any 24GB GPU (RTX 3090/4090/A5000) with llama.cpp: install, scripts, MTP tuning, benchmarks
- [noonghunna/club-3090](https://github.com/noonghunna/club-3090) - Community recipes for serving LLMs on RTX 3090/4090/5090 CUDA gpus. Multi-engine (vLLM, llama.cpp, ik_llama) and model-agnostic. Currently shipping Qwen3.6-27B Qwen3.6 35B Gemma 4 26B Gemma 4 31B configs for 1× and 2× cards.
- [Best llama.cpp config for Qwen3.8-Flash-Next (RTX 4090 24GB)](https://gist.github.com/ryan4yin/48617bbddacc7067f10799770b7cc33f)
- [Best llama.cpp config for Qwen3.8-27B (RTX 4090 24GB)](https://gist.github.com/ryan4yin/19db9fa44972c5735c1d181e8888d4fe)