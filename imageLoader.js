'use client'

export default function myImageLoader({ src }) {
  // const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  if (src.includes('http')) return src;
  return `https://res.cloudinary.com/dkqzrblhj/image/upload/wearins${src}`;
}