import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface RevealImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
  dark?: boolean;
}

function RevealImageListItem({ text, images, dark = false }: RevealImageListItemProps) {
  const container = "absolute right-4 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-1.5">
      <span
        className="uppercase transition-all duration-500 group-hover:opacity-30"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
          fontWeight: 400,
          letterSpacing: '0.06em',
          color: dark ? 'hsl(36 21% 95%)' : 'hsl(var(--foreground))',
          display: 'block',
          lineHeight: 1,
        }}
      >
        {text}
      </span>
      <div className={container}>
        <div className={effect}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12",
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

const industryItems: RevealImageListItemProps[] = [
  {
    text: "Interior Design",
    images: [
      { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&auto=format&fit=crop&q=60", alt: "Interior" },
      { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&auto=format&fit=crop&q=60", alt: "Interior 2" },
    ],
  },
  {
    text: "Hospitality & Hotels",
    images: [
      { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&auto=format&fit=crop&q=60", alt: "Hotel" },
      { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&auto=format&fit=crop&q=60", alt: "Hotel 2" },
    ],
  },
  {
    text: "Art & Galleries",
    images: [
      { src: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=200&auto=format&fit=crop&q=60", alt: "Art" },
      { src: "https://images.unsplash.com/photo-1577083552761-1d21e5b81f66?w=200&auto=format&fit=crop&q=60", alt: "Gallery" },
    ],
  },
  {
    text: "Wellness & Coaching",
    images: [
      { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&auto=format&fit=crop&q=60", alt: "Wellness" },
      { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&auto=format&fit=crop&q=60", alt: "Yoga" },
    ],
  },
  {
    text: "Fashion & Lifestyle",
    images: [
      { src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&auto=format&fit=crop&q=60", alt: "Fashion" },
      { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&auto=format&fit=crop&q=60", alt: "Lifestyle" },
    ],
  },
  {
    text: "Food & Beverage",
    images: [
      { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&auto=format&fit=crop&q=60", alt: "Food" },
      { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&auto=format&fit=crop&q=60", alt: "Restaurant" },
    ],
  },
  {
    text: "Tech & SaaS",
    images: [
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&auto=format&fit=crop&q=60", alt: "Tech" },
      { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&auto=format&fit=crop&q=60", alt: "Code" },
    ],
  },
  {
    text: "Real Estate",
    images: [
      { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&auto=format&fit=crop&q=60", alt: "Real estate" },
      { src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=200&auto=format&fit=crop&q=60", alt: "Architecture" },
    ],
  },
  {
    text: "Retail & E-commerce",
    images: [
      { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&auto=format&fit=crop&q=60", alt: "Retail" },
      { src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=200&auto=format&fit=crop&q=60", alt: "Shopping" },
    ],
  },
  {
    text: "Education & Courses",
    images: [
      { src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=200&auto=format&fit=crop&q=60", alt: "Education" },
      { src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&auto=format&fit=crop&q=60", alt: "Learning" },
    ],
  },
  {
    text: "Health & Beauty",
    images: [
      { src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=200&auto=format&fit=crop&q=60", alt: "Beauty" },
      { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=200&auto=format&fit=crop&q=60", alt: "Skincare" },
    ],
  },
  {
    text: "Events & Entertainment",
    images: [
      { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&auto=format&fit=crop&q=60", alt: "Event" },
      { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&auto=format&fit=crop&q=60", alt: "Concert" },
    ],
  },
];

function IndustryRevealList({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-0">
      {industryItems.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} dark={dark} />
      ))}
    </div>
  );
}

const contentItems: RevealImageListItemProps[] = [
  {
    text: "Educational Carousels",
    images: [
      { src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&auto=format&fit=crop&q=60", alt: "Learning" },
      { src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=200&auto=format&fit=crop&q=60", alt: "Education" },
    ],
  },
  {
    text: "Brand Stories",
    images: [
      { src: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=200&auto=format&fit=crop&q=60", alt: "Story" },
      { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&auto=format&fit=crop&q=60", alt: "Brand" },
    ],
  },
  {
    text: "Product & Service Launches",
    images: [
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&auto=format&fit=crop&q=60", alt: "Launch" },
      { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&auto=format&fit=crop&q=60", alt: "Product" },
    ],
  },
  {
    text: "Reels & Short-form Video",
    images: [
      { src: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=200&auto=format&fit=crop&q=60", alt: "Video" },
      { src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&auto=format&fit=crop&q=60", alt: "Reels" },
    ],
  },
  {
    text: "Community Posts",
    images: [
      { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&auto=format&fit=crop&q=60", alt: "Community" },
      { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=200&auto=format&fit=crop&q=60", alt: "People" },
    ],
  },
  {
    text: "Thought Leadership",
    images: [
      { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60", alt: "Leadership" },
      { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=60", alt: "Speaker" },
    ],
  },
  {
    text: "Copywriting & Captions",
    images: [
      { src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&auto=format&fit=crop&q=60", alt: "Writing" },
      { src: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=200&auto=format&fit=crop&q=60", alt: "Copy" },
    ],
  },
  {
    text: "Brand Assets",
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&auto=format&fit=crop&q=60", alt: "Design" },
      { src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&auto=format&fit=crop&q=60", alt: "Assets" },
    ],
  },
  {
    text: "Ads Creative",
    images: [
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&auto=format&fit=crop&q=60", alt: "Ads" },
      { src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=200&auto=format&fit=crop&q=60", alt: "Creative" },
    ],
  },
];

function ContentRevealList({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
      {contentItems.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} dark={dark} />
      ))}
    </div>
  );
}

export { IndustryRevealList, ContentRevealList };
