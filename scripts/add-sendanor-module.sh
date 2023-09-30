#!/bin/bash
cd "$(dirname "$0")/.."
set -e
#set -x

CONTEXT="$1"
NAME="$2"

if test "x$CONTEXT" = x || test "x$NAME" = x; then
  echo 'USAGE: ./scripts/add-sendanor-module.sh CONTEXT NAME' >&2
  echo '...where: context is backend | frontend | testing | ssr-server' >&2
  exit 1
fi

ORG='sendanor'
BRANCH='main'
DIR="$CONTEXT/src/fi/sendanor/$NAME"
REPO_NAME="$ORG/fi.sendanor.$NAME"
REPO_URL="git@github.com:$REPO_NAME.git"

if test -d "$DIR"; then
  git config -f .gitmodules "submodule.$DIR.path" "$DIR"
  git config -f .gitmodules "submodule.$DIR.url" "$REPO_URL"
else
  git submodule add "$REPO_URL" "$DIR"
fi
git config -f .gitmodules "submodule.$DIR.branch" "$BRANCH"
