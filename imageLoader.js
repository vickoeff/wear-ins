'use client'

export default function myImageLoader({ src }) {
  // const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  return `https://res.cloudinary.com/dkqzrblhj/image/upload/wearins${src}`;
}