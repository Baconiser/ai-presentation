<template>
  <div class="image-stack  relative w-full h-full">
    <div
        class="image-stack__cards absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-200px pb-[45%] max-w-520px">

      <Card :id="image"
            :index="images.length - index"
            v-for="(image, index) in images"
            :key="index"
            @like="likeImage(index)"
            @dislike="dislikeImage(index)"
      >
        <img :src="image" alt="Image" class="w-full h-full object-cover"/>
      </Card>
    </div>
    <div class="image-stack__buttons">
      <button @click="handleDislike(currentIndex)" :disabled="isTransitioning">
        Dislike
      </button>
      <button @click="handleLike(currentIndex)" :disabled="isTransitioning">
        Like
      </button>
    </div>
  </div>
</template>

<style>

</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
  images: []
})

const handledImages:Ref<string[]> = ref([]);

const currentIndex = ref(0);

const availableImages = computed(() => {
  return props.images.filter((image:any) => {
    return !handledImages.value.includes(image);
  });
});

const likeImage = (index: number) => {
  console.log(`Liked image at index ${ index }`);
  handledImages.value.push(props.images[index]);
  nextImage();
};

const dislikeImage = (index: number) => {
  console.log(`Disliked image at index ${ index }`);
  handledImages.value.push(props.images[index]);
  nextImage();
};

const nextImage = () => {
  currentIndex.value++;
  if (currentIndex.value === props.images.length) {
    currentIndex.value = 0;
  }
};

const handleLike = (index: number) => {
  likeImage(index);
};

const handleDislike = (index: number) => {
  dislikeImage(index);
};


onMounted(() => {

});
</script>
