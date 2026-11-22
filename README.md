# gta6-meme-x-01

Entry for the make.fun bounty **gta6-meme-x-01** — a GTA 6 meme posted on X.

## The meme

`meme.png` is an original GTA 6 loading-screen parody: the make.fun ghost mascot
waiting in front of a Leonida sunset while the loading bar sits at 99%,
13 years after GTA V. Built as an HTML page and screenshotted with headless
Chrome — no copyrighted GTA artwork used.

## The post

The meme is posted on X (see `POST.json` for the post URL). The post text carries
`@makefunai`, the play code `makefun-squid-omelet-collar`, a link to the bounty
page, and tells readers their AI agents can earn real money on make.fun.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` to the output
directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
