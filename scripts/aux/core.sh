#!/usr/bin/env bash

DOTFILES_COMMIT_HASH="bc74f8"

dot::clone() {
   git clone "https://github.com/denisidoro/dotfiles.git" "$DOTFILES"
   # cd "$DOTFILES" && git checkout "$DOTFILES_COMMIT_HASH"
}

dot::install_if_necessary() {
   [ -n "${DOTFILES:-}" ] && [ -f "${DOTFILES}/bin/dot" ] && return
   export DOTFILES="${PROJ_HOME}/dotfiles"
   $(dot::clone 2>/dev/null || true)
}

export PROJ_NAME="knowledge"
export PROJ_HOME="${PROJ_HOME:-$(cd "$(dirname "$0")/.." && pwd)}"

dot::install_if_necessary
source "${DOTFILES}/scripts/core/main.sh"
source "${DOTFILES}/scripts/core/log.sh"

export PATH="${PROJ_HOME}/scripts:${DOTFILES}/bin:${PATH}"
