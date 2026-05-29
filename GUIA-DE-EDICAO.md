# Guia simples para editar o site Sol De Cheiro

Este site foi organizado para você conseguir trocar textos, links e fotos sem mexer em várias partes diferentes.

## 1. Onde editar textos, WhatsApp, redes e produtos

Abra este arquivo:

```txt
src/data/site.ts
```

Nele você encontra:

- Link do WhatsApp
- Links do Instagram e Facebook
- Nome, descrição e benefício dos produtos
- Benefícios dos sabonetes
- Ingredientes especiais
- Passo a passo de compra
- Tabela comparativa
- Perguntas e respostas do FAQ

Exemplo do WhatsApp:

```ts
export const contact = {
  whatsapp: "https://wa.me/5500000000000",
  whatsappLabel: "Comprar pelo WhatsApp"
};
```

Troque somente o número dentro do link.

Exemplo:

```ts
whatsapp: "https://wa.me/5599999999999",
```

Use o formato:

```txt
55 + DDD + número
```

Sem espaço, sem traço e sem parênteses.

## 2. Como trocar a foto principal do topo

A foto principal fica aqui:

```txt
public/sol-de-cheiro-hero.png
```

Para trocar:

1. Separe uma nova imagem bonita.
2. Renomeie essa imagem para `sol-de-cheiro-hero.png`.
3. Coloque dentro da pasta `public`.
4. Substitua a imagem antiga.

Recomendação: use imagem horizontal, bonita e clara.

## 3. Como trocar fotos dos produtos

As fotos dos produtos ficam na pasta:

```txt
public/produtos
```

Os arquivos atuais são:

```txt
sabonete-acafrao.jpg
sabonete-aveia.jpg
sabonete-maracuja.jpg
sabonete-mel.jpg
sabonete-ervas.jpg
kits-presente.jpg
```

Para trocar a foto de um produto:

1. Escolha sua foto.
2. Renomeie com o mesmo nome do arquivo acima.
3. Coloque dentro da pasta `public/produtos`.
4. Confirme a substituição do arquivo antigo.

Exemplo: para trocar a foto do sabonete de mel, substitua:

```txt
public/produtos/sabonete-mel.jpg
```

## 4. Como mudar nome e texto de um produto

Abra:

```txt
src/data/site.ts
```

Procure por:

```ts
export const products = [
```

Cada produto tem este formato:

```ts
{
  name: "Sabonete de açafrão",
  description: "Texto do produto.",
  benefit: "Benefício principal.",
  image: "/produtos/sabonete-acafrao.jpg",
  icon: Sun
}
```

Você pode trocar:

- `name`: nome do produto
- `description`: descrição
- `benefit`: benefício principal
- `image`: caminho da foto

Não mexa no `icon` por enquanto.

## 5. Depois de editar, como ver no navegador

Se o site já estiver rodando, normalmente basta salvar o arquivo e atualizar o navegador.

Se não estiver rodando, abra o terminal na pasta do projeto e rode:

```bash
npm run dev
```

Depois abra:

```txt
http://localhost:3001
```

## 6. Regra importante para não quebrar

Ao editar textos no arquivo `src/data/site.ts`, mantenha as aspas.

Certo:

```ts
name: "Sabonete de lavanda",
```

Errado:

```ts
name: Sabonete de lavanda,
```

Se aparecer erro depois de editar, normalmente é alguma aspas, vírgula ou chave apagada sem querer.
