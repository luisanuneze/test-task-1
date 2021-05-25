<template>
  <div v-if="loaded">
    <AppHeader
      :header="headerSection"
      :background_image="headerSection.background_image"
    />
    <HowItWorks :howItWorksSection="howItWorksSection" />
    <div class="benefits-section-wrapper">
      <Benefits
        :sectionBenefits="benefitsSection"
        :title="benefitsSection.title"
      />
    </div>
    <Testimonials :dataTestimonials="testimonialsSection" />
    <div class="wrapper-contact">
      <div class="container">
        <Contact :contactDetails="contactSection" />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Benefits from "@/components/TheBenefitsSection";
import Contact from "@/components/TheContactSection";
import HowItWorks from "@/components/TheHowItWorksSection";
import Testimonials from "@/components/TheTestimonialsSection";

export default {
  data() {
    return {
      page: {}
    };
  },
  computed: {
    headerSection() {
      return this.page.acf.section_header || {};
    },
    howItWorksSection() {
      return this.page.acf.section_how_it_works || {};
    },
    benefitsSection() {
      return this.page.acf.section_benefits || {};
    },
    testimonialsSection() {
      return this.page.acf.section_testimonials || {};
    },
    contactSection() {
      return this.page.acf.section_contact || {};
    }
  },
  head() {
    return {
      title: this.meta?.title,
      meta: this.meta?.data
    };
  },
  components: {
    AppHeader,
    Benefits,
    Contact,
    HowItWorks,
    Testimonials
  },
  async fetch() {
    //=============SHORT RESPONSE EXAMPLE START=========
    this.data = await this.$axios.get("/wp/v2/pages/<page-id>");

    let page = {
      data: {
        acf: {
          section_header: Object,
          section_how_it_works: Object,
          section_benefits: Object,
          section_testimonials: Object,
          section_contact: Object
        },
        meta: {
          title: String,
          data: Object
        }
      }
    };

    this.page = page.data;
    this.loaded = true;
  }
};
</script>

<style></style>
