// Sample product data with images
const products = [
    {
        id: 1,
        name: "iPhone 14 Pro Max",
        description: "The iPhone 14 Pro Max is a premium smartphone that combines cutting-edge technology with elegant design. It is equipped with the latest A16 Bionic chip, delivering unmatched performance and efficiency. This makes the device ideal for multitasking, gaming, and demanding apps, all while optimizing battery life.The iPhone 14 Pro Max features a stunning 6.7-inch Super Retina XDR display with ProMotion technology, offering a smoother user experience with adaptive refresh rates up to 120Hz. The Always-On display provides easy access to time, widgets, and notifications without waking up the screen.It boasts a durable ceramic shield front cover and a surgical-grade stainless steel frame, ensuring both style and resilience. The device is also IP68 water and dust resistant, providing protection against spills and splashes.A key highlight is its triple-camera system, featuring a 48MP main sensor for incredible detail, a 12MP ultra-wide camera for expansive shots, and a 12MP telephoto lens with 3x optical zoom. The Photonic Engine enhances low-light photography, allowing for crisp and vibrant photos in challenging conditions. On the front, a 12MP TrueDepth camera ensures high-quality selfies and supports Face ID for secure authentication.Battery Life: The iPhone 14 Pro Max is designed to provide all-day battery life, offering up to 29 hours of video playback. It supports MagSafe wireless charging and fast charging, capable of charging up to 50% in about 30 minutes with a 20W adapter or higher.",
        price: "$10",
        Image: "https://buy.budli.in/cdn/shop/files/Apple_iPhone_14_Pro_Max_5G_256GB_Deep_Purple.jpg"
    },
    {
        id: 2,
        name: "Samsung s23 ultra",
        description: "The Samsung Galaxy S23 Ultra is powered by Snapdragon 8 Gen 2 for Galaxy, the fastest Snapdragon ever. It features an accelerated Qualcomm® Kryo™ CPU with up to 3.36GHz peak speeds, providing superior performance when you need it most. With the help of the Snapdragon X70 5G Modem-RF System and the Qualcomm 5G AI Processor, the Galaxy S23 Ultra harnesses the power of AI to enable breakthrough 5G coverage and latency so you can stay connected during high-speed downloads, intense gaming sessions, and up to 26 hours of video playback. Simply put: Snapdragon 8 Gen 2 for Galaxy sets a new standard for premium devices.Gaming on the Galaxy S23 Ultra packs a punch thanks to Snapdragon Elite Gaming™ features. With hardware-accelerated ray tracing for life-like lighting effects, improved performance, and long-lasting battery life, it’s safe to say that this device is designed to be every mobile gamer’s best friend. The Snapdragon Game Post Processing Accelerator takes things to the next level with immersive effects like bloom, depth of field, and motion blur to enhance the action. Plus, the phone comes with Qualcomm FastConnect 78000 and the latest Bluetooth technology for low-latency streaming and smooth audio experiences, so you can keep your head in the game.",
        price: "$20",
        Image: "https://rebootcomputers.ae/wp-content/uploads/2024/01/D_NQ_NP_607001-MLU71541490170_092023-O.webp"
    },
    {
        id: 3,
        name: "vivo x90 pro ",
        description: "The Vivo V9 Pro has a 6.3-inch display with a small notch at the top. It is powered by a Qualcomm Snapdragon 660 processor and has 6GB of RAM. There is 64GB of internal storage which is further expandable upto 256GB.The vivo X90 Pro boots Android 13 with a proprietary layer on top, which varies depending on where you are in the world. The China-bound version is called Origin OS 3, while we get the 'international' Funtouch OS - v13, to be specific.X90 Pro is not a professional waterproof mobile phone, but it is splash-, water- and dust-resistant under normal use. It is tested under controlled laboratory conditions with a rating of IP68 under IEC standard 60529.Vivo X90 Pro Plus features a VC liquid cooling solution with a soaking plate covering an area of 4285mm².",
        price: "$30",
        Image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRoUWE1_Q9WNApLU9NXC1FR2hFps7Wt7TfuOWPyMZgyFYOdaHWdDkbTZdl4l8VtPikigwj4jvLzL_XqC6q5diOUbhCLyZgv2slov-FsRfGR6SkzK1NX83KV2OEnqKo0rWIoOG59Luw&usqp=CAc"
    },
    {
        id: 4,
        name: "Google Pixel 7 Pro",
        description: "The Google Pixel 7 Pro features a 6.7-inch LTPO OLED display with a resolution of 3120 x 1440 pixels. It is powered by the Google Tensor G2 chip, with 12GB of RAM and storage options of 128GB, 256GB, or 512GB. The camera system includes a 50MP main sensor, a 12MP ultra-wide sensor, and a 48MP telephoto lens, making it perfect for photography enthusiasts.",
        price: "$999",
        Image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQzTnC2KGmplYCQ18-j-FDWCoh5Xdy_FoZ1sV4pE04JZZwbuYGNk6mzmItT0QR3JtdYDGS82bPd9UaS6NV2t6wlS6fjJ16NqI9F1n6gRfCBo-yduDANhEXysJKPig&usqp=CAc"
    },
    {
        id: 5,
        name: "OnePlus 11",
        description: "The OnePlus 11 features a 6.7-inch Fluid AMOLED display with a refresh rate of 120Hz. It is powered by the Snapdragon 8 Gen 2 processor, paired with up to 16GB of RAM and 256GB of storage. The camera setup includes a 50MP main sensor and a 48MP ultra-wide sensor, ensuring stunning photography and videography.",
        price: "$699",
        Image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRI8-vwA0NoprLQmlxzo9oDJpSZs7X7GkvMLPNAHGbZC6KtTBptKKU0irlpDhR-FwS5aScvHGwcZDwtYPiEX6MCsrVLQe3BUQVTTF6WMXdBz32kY-G_yhnC24wukAZZw3DOBn4_Og&usqp=CAc"
    },
    {
        id: 6,
        name: "Xiaomi 13 Pro",
        description: "The Xiaomi 13 Pro features a 6.73-inch AMOLED display with a 120Hz refresh rate. Powered by the Snapdragon 8 Gen 2 processor and up to 12GB of RAM, it offers seamless performance. The camera system includes a 50MP triple-lens setup for professional-quality photography.",
        price: "$899",
        Image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLbjGoAwG8_j51lD94sgbUuRUYG7qOndkSrhJJtLqee5-A2LqtzUhw-X7QbctHBUaJ_QF3R5mVX2eskfQ9TiAsJS4hfrINILxh_ycyFLay1DB-nSw-XG8bJnpS86rcQ1xl_v8E8w&usqp=CAc"
    }
];

// Function to display product list
function displayProductList() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const li = document.createElement('li');
        li.classList.add('product-item');
        
        li.innerHTML = `
            <img src="${product.Image}" alt="${product.name}" class="product-image"/>
            <div>
                <h2>${product.name}</h2>
                <p>${product.price}</p>
            </div>
        `;

        li.onclick = () => {
            // Store product details in localStorage and redirect to product details page
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            window.location.href = 'product.html';
        };

        productList.appendChild(li);
    });
}

// Call the function to display the product list
displayProductList();
