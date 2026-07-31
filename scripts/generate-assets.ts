/**
 * Higgsfield Image Generation Script
 *
 * Run via: npx tsx scripts/generate-assets.ts
 *
 * This script documents all required image assets with their Higgsfield prompts.
 * Use the higgsfield-generate skill in Claude Code to generate each image,
 * then save it to the specified destination path.
 *
 * Model: GPT Image 2 (default for photorealistic images)
 * Aspect ratios: --landscape for hero/practice areas, --portrait for team headshots
 */

export interface ImageSpec {
  filename: string;
  destination: string;
  widthHint: number;
  heightHint: number;
  higgsfieldPrompt: string;
  higgsfieldFlags: string;
  nextImageAlt: string;
  nextImagePriority?: boolean;
}

export const imageSpecs: ImageSpec[] = [
  // ─── Hero Banner ───────────────────────────────────────────────────────────
  {
    filename: "hero-banner.jpg",
    destination: "public/images/hero-banner.jpg",
    widthHint: 1920,
    heightHint: 1080,
    higgsfieldPrompt:
      "Interior of a prestigious London law firm office, soaring high ceilings with ornate Georgian plasterwork, floor-to-ceiling dark mahogany bookshelves filled with leather-bound law books, deep button-tufted leather Chesterfield chairs, a grand partners desk with a single green-shaded lamp, tall sash windows with soft golden late-afternoon light streaming in, navy and champagne gold colour palette, rich deep tones, no people, photorealistic architectural interior photography, magazine quality",
    higgsfieldFlags: "--landscape --quality high",
    nextImageAlt:
      "Prestigious London law firm office interior at Ashworth & Partners Solicitors",
    nextImagePriority: true,
  },

  // ─── Team Headshots ────────────────────────────────────────────────────────
  {
    filename: "eleanor-ashworth.jpg",
    destination: "public/images/team/eleanor-ashworth.jpg",
    widthHint: 800,
    heightHint: 960,
    higgsfieldPrompt:
      "Professional studio headshot portrait of a distinguished British female solicitor in her early 50s, silver-streaked dark hair pulled back elegantly, sharp intelligent eyes with a warm but authoritative expression, wearing a well-tailored navy blazer with a subtle champagne gold brooch, crisp white blouse, minimal jewellery, soft neutral grey studio background with professional lighting, shallow depth of field, photorealistic portrait photography, high resolution",
    higgsfieldFlags: "--portrait --quality high",
    nextImageAlt:
      "Eleanor Ashworth, Managing Partner at Ashworth & Partners Solicitors",
  },
  {
    filename: "james-pemberton.jpg",
    destination: "public/images/team/james-pemberton.jpg",
    widthHint: 800,
    heightHint: 960,
    higgsfieldPrompt:
      "Professional studio headshot portrait of a distinguished British male solicitor in his late 40s, neat dark brown hair with slight greying at the temples, calm and trustworthy expression with a gentle professional smile, wearing a traditional dark charcoal suit with a subtle pinstripe, pale blue shirt, classic silk tie in burgundy and navy, soft neutral grey studio background, professional studio lighting, photorealistic portrait photography, high resolution",
    higgsfieldFlags: "--portrait --quality high",
    nextImageAlt: "James Pemberton, Partner at Ashworth & Partners Solicitors",
  },
  {
    filename: "priya-sharma.jpg",
    destination: "public/images/team/priya-sharma.jpg",
    widthHint: 800,
    heightHint: 960,
    higgsfieldPrompt:
      "Professional studio headshot portrait of a British South Asian female solicitor in her mid-30s, long dark hair in a professional style, confident and approachable expression, wearing a smart contemporary dark navy blazer, minimal gold jewellery, soft neutral light studio background, natural soft lighting, photorealistic portrait photography, high resolution",
    higgsfieldFlags: "--portrait --quality high",
    nextImageAlt:
      "Priya Sharma, Senior Associate at Ashworth & Partners Solicitors",
  },
  {
    filename: "oliver-hartley.jpg",
    destination: "public/images/team/oliver-hartley.jpg",
    widthHint: 800,
    heightHint: 960,
    higgsfieldPrompt:
      "Professional studio headshot portrait of a young British male solicitor in his early 30s, light brown hair, friendly open expression with a professional smile, wearing a modern dark suit, white shirt with no tie for a contemporary professional look, soft neutral grey studio background, professional portrait lighting, photorealistic portrait photography, high resolution",
    higgsfieldFlags: "--portrait --quality high",
    nextImageAlt:
      "Oliver Hartley, Associate at Ashworth & Partners Solicitors",
  },

  // ─── Practice Area Cards ───────────────────────────────────────────────────
  {
    filename: "commercial-law.jpg",
    destination: "public/images/practice-areas/commercial-law.jpg",
    widthHint: 800,
    heightHint: 600,
    higgsfieldPrompt:
      "Sleek modern corporate boardroom in a prestigious London City office building, dark polished wood conference table with leather chairs, floor-to-ceiling windows showing a blurred City of London skyline at dusk, fountain pen on a contract document, navy and gold colour tones, dramatic lighting, no people, photorealistic architectural photography",
    higgsfieldFlags: "--landscape --quality high",
    nextImageAlt:
      "Commercial Law services at Ashworth & Partners Solicitors",
  },
  {
    filename: "private-client.jpg",
    destination: "public/images/practice-areas/private-client.jpg",
    widthHint: 800,
    heightHint: 600,
    higgsfieldPrompt:
      "Elegant traditional English solicitor's study with a fine antique mahogany writing desk, leather-bound legal volumes on shelves, a single green-shaded brass desk lamp casting warm golden light, a neatly placed Last Will and Testament document with a wax seal, cream and gold tones with deep shadows, no people, photorealistic atmospheric photography",
    higgsfieldFlags: "--landscape --quality high",
    nextImageAlt:
      "Private Client services including wills, trusts and probate at Ashworth & Partners",
  },
  {
    filename: "employment-law.jpg",
    destination: "public/images/practice-areas/employment-law.jpg",
    widthHint: 800,
    heightHint: 600,
    higgsfieldPrompt:
      "Modern clean professional office environment, a glass desk with an employment contract document and a fountain pen, minimalist navy blue and white interior, soft natural light, contemporary UK office aesthetics, no people, photorealistic interior photography",
    higgsfieldFlags: "--landscape --quality high",
    nextImageAlt:
      "Employment Law services at Ashworth & Partners Solicitors",
  },
  {
    filename: "dispute-resolution.jpg",
    destination: "public/images/practice-areas/dispute-resolution.jpg",
    widthHint: 800,
    heightHint: 600,
    higgsfieldPrompt:
      "A traditional British courtroom or hearing room interior, richly panelled dark oak walls, polished wooden benches, afternoon light through high windows, a brass-mounted Scales of Justice symbol on the bench, navy and gold colour palette, authoritative and formal atmosphere, no people, photorealistic architectural photography",
    higgsfieldFlags: "--landscape --quality high",
    nextImageAlt:
      "Dispute Resolution and commercial litigation at Ashworth & Partners Solicitors",
  },
];

function main() {
  console.log("\n🏛️  Ashworth & Partners — Higgsfield Image Generation Guide\n");
  console.log("=".repeat(60));
  console.log("\nUse the higgsfield-generate skill in Claude Code to generate each image.\n");

  imageSpecs.forEach((spec, i) => {
    console.log(`\n[${i + 1}/${imageSpecs.length}] ${spec.filename}`);
    console.log(`  Destination : ${spec.destination}`);
    console.log(`  Size hint   : ${spec.widthHint}×${spec.heightHint}px`);
    console.log(`  Flags       : ${spec.higgsfieldFlags}`);
    console.log(`  Prompt      : ${spec.higgsfieldPrompt.substring(0, 100)}...`);
  });

  console.log("\n" + "=".repeat(60));
  console.log(`\nTotal images to generate: ${imageSpecs.length}`);
  console.log("After generation, ensure images are saved to /public/images/ as specified above.\n");
}

main();
