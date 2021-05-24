<template>
  <HelloWorld />
  <!-- <div v-if="loaded">
    <HeaderSection
      :header="dataSectionHeader"
      :background_image="dataSectionHeader.background_image"
    />
    <HowItWorks :howItWorksSection="dataSectionHowItWorks" />
    <div class="benefits-section-wrapper">
      <SectionBenefits
        :sectionBenefits="datasectionBenefits"
        :title="datasectionBenefits.title"
      />
    </div>
    <TestimonialsComponent :dataTestimonials="testimonialsData" />
    <div class="wrapper-contact">
      <div class="container">
        <ContactSection :contactDetails="dataSectionContact" />
      </div>
    </div>
  </div> -->
</template>

<script>
import { HelloWorld } from "@/components/hello-world";

export default {
  components: {
    name: HelloWorld
  }
};
// import HeaderSection from "@/components/section-header";
// import HowItWorks from "@/components/how-it-works";
// import SectionBenefits from "@/components/benefits-section";
// import TestimonialsComponent from "@/components/section-testimonials";
// import ContactSection from "@/components/section-contact";

// export default {
//   data() {
//     return {
//       loaded: false,
//       page: null,
//       dataSectionHeader: null,
//       dataSectionHowItWorks: null,
//       datasectionBenefits: null,
//       testimonialsData: null,
//       dataSectionContact: null
//     };
//   },
//   async fetch() {
//     //=============SHORT RESPONSE EXAMPLE START=========
//     // var page = {
//     //   data:{
//     //     acf:{
//     //       section_header:Object,
//     //       section_how_it_works:Object,
//     //       section_benefits:Object,
//     //       section_testimonials:Object,
//     //       section_contact:Object,
//     //     },
//     //     meta:{
//     //       title:String,
//     //       data:Object,
//     //     }
//     //   }
//     // }
//     //=============SHORT RESPONSE EXAMPLE END===========

//     var page = await this.$axios.get("/wp/v2/pages/<page-id>");
//     var data = page.data;

//     this.page = page;
//     this.dataSectionHeader = data.acf.section_header;
//     this.dataSectionHowItWorks = data.acf.section_how_it_works;
//     this.datasectionBenefits = data.acf.section_benefits;
//     this.testimonialsData = data.acf.section_testimonials;
//     this.dataSectionContact = data.acf.section_contact;

//     this.loaded = true;
//   },
//   head() {
//     return {
//       title: this.page.data.meta.title,
//       meta: this.page.data.meta.data
//     };
//   }
// };
</script>

<style></style>
