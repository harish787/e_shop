import axios from 'axios';


const mockProducts = [
    { id: 1, name: 'Speaker', imageUrl: '/ht.jpeg', price: 10.99, description: 'Experience immersive sound with our premium speaker, featuring crystal-clear audio, deep bass, and sleek design. Perfect for home, office, or on-the-go use. Connect effortlessly via Bluetooth and enjoy up to 12 hours of uninterrupted music.' },
    { id: 2, name: 'Freezer', imageUrl: '/frizer.jpeg', price: 24.99, description: 'Enhance your kitchen storage with our advanced freezer, providing ample space and efficient cooling for preserving food. Featuring adjustable temperature settings and frost-free technology, it ensures optimal freshness and convenience. Sleek design and energy efficiency make it an essential addition to any modern home.' },
    { id: 3, name: 'Head Phone', imageUrl: '/img1.jpeg', price: 14.99, description: 'Discover superior sound quality with our ergonomic headphones, designed for ultimate comfort and crystal-clear audio. Enjoy powerful bass, noise-cancellation features, and up to 20 hours of wireless playback. Perfect for music, calls, and gaming on the go.' },
    { id: 4, name: 'Oven', imageUrl: '/oven.jpeg', price: 29.99, description: 'Upgrade your kitchen with our versatile oven, offering precise temperature control and multiple cooking modes. Enjoy even baking, roasting, and grilling with convection technology. Sleek design and easy-to-clean interior make it perfect for any culinary enthusiast.' },
    { id: 5, name: 'Charging point', imageUrl: '/mobile.jpeg', price: 19.99, description: 'Streamline your charging setup with our innovative 3-in-1 charging point. Featuring compatibility with multiple devices, including smartphones, tablets, and smartwatches, this compact device offers simultaneous charging for efficient power management. Ideal for home or office use, ensuring convenience and organization in one sleek solution.' },
    { id: 6, name: 'Home appliances', imageUrl: '/home.jpeg', price: 11.99, description: 'Transform your living space with our range of reliable home appliances. From efficient refrigerators and powerful vacuum cleaners to advanced washing machines and versatile cooking appliances, our products blend innovation with practicality. Enhance convenience and style in every corner of your home.' },
    { id: 7, name: 'fridge', imageUrl: '/fridge.jpeg', price: 13.99, description: 'Upgrade your kitchen with our state-of-the-art refrigerator, combining spacious storage and advanced cooling technology. Enjoy precise temperature control, energy efficiency, and innovative features like frost-free operation and adjustable shelves. Perfect for preserving freshness and organizing groceries with ease, ensuring convenience and reliability in every home' },
    { id: 8, name: 'Head phones', imageUrl: '/img1.jpeg', price: 25.99, description: "Discover superior sound quality with our ergonomic headphones, designed for ultimate comfort and crystal-clear audio. Enjoy powerful bass, noise-cancellation features, and up to 20 hours of wireless playback. Perfect for music, calls, and gaming on the go." },
     ];


export const fetchProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: mockProducts });
        }, 1000); 
    });
};
