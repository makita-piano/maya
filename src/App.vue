<template>
  <div>
    <VApp>
      <VContent>
        <RouterView />
      </VContent>
    </VApp>
  </div>
</template>

<script>
export default {
	mounted(){
		const title = "official website";
		const description = "説明文";
		document.title = title;
		document.querySelector("meta[property='og:title']")
			.setAttribute("content", title);
		document.querySelector("meta[name='description']")
			.setAttribute("content", description);
		document.querySelector("meta[property='og:description']")
			.setAttribute("content", description);
	}
};
</script>
