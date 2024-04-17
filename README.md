# Projeto pessoal de Transcrição de vídeo e tradução para portugês

Para transcrever o vídeo clicar no botão começar e o texto irá aparecer na caixa de texto abaixo.


## Tradução

Para tradução está sendo utilizado o [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate)

Para poder utilizar a função de tradução deverá ter o Python instalado em versão 3.8 ou posterior

```
pip install libretranslate
libretranslate --load-only en,es,ja,pt
```

Com isso o tradutor irá funcionar na porta 5000.

A tradução é feita a cada buffer gerado pelo transcritor, e não a cada pequeno pedaço de texto.
