import image1 from '/src/assets/image1.jpeg';
import image2 from '/src/assets/image2.jpeg';
import image3 from '/src/assets/image3.jpeg';
import image4 from '/src/assets/image4.jpeg';

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string; // add category for filtering
}

export const galleryData: GalleryItem[] = [
  { id: 1, src: image1, alt: "Project 1", category: "Projects" },
  { id: 2, src: image2, alt: "Project 2", category: "Web" },
  { id: 3, src: image3, alt: "Project 3", category: "Projects" },
  { id: 4, src: image4, alt: "Project 4", category: "Web" },
];
