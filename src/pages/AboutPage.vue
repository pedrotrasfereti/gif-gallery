<template>
  <q-page class="flex flex-center fit">
    <q-card class="fit" :style="{ maxWidth: '600px' }">
      <q-card-section class="flex items-center justify-center" avatar>
        <q-avatar size="140px">
          <img src="https://avatars.githubusercontent.com/u/70381963" />
        </q-avatar>
      </q-card-section>

      <q-item-section class="flex items-center justify-center">
        <div class="text-h6">Pedro Trasfereti</div>
      </q-item-section>

      <q-item-section class="flex col q-gutter-sm">
        <div class="text-grey-5 q-py-sm">
          Olá! Me chamo Pedro e amo aprender sobre o universo de React, Vue e outras tecnologias
          Front. Me sinto inspirado pelo encontro da arte com a tecnologia. 😊
        </div>

        <q-item-label class="text-white" caption>Sobre esse projeto:</q-item-label>

        <div class="text-grey-5 q-py-sm">
          O projeto consiste em uma galeria de GIFs, onde os usuários podem visualizar e
          compartilhar suas criações. A galeria é alimentada pela API da GIPHY, que fornece uma
          ampla variedade de imagens animadas. Para estilização utilizei as classes de utilidade do
          Quasar e a biblioteca <code>@yeger/vue-masonry-wall</code> para criar um layout de galeria
          responsivo e moderno. A aplicação também permite explorar por categoria e favoritar os
          GIFs que mais gostou, utilizando o Pinia e LocalStorage para gerenciar o estado.
        </div>
      </q-item-section>

      <q-card-actions class="justify-center">
        <q-btn
          glossy
          label="Meu GitHub"
          icon="ion-logo-github"
          tag="a"
          href="https://github.com/pedrotrasfereti/gif-gallery"
          target="_blank"
          ref="noreferrer"
        />

        <q-btn
          color="blue-6"
          glossy
          label="Meu Website"
          icon="public"
          tag="a"
          href="https://pedrotrasfereti.vercel.app/"
          target="_blank"
          ref="noreferrer"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>
