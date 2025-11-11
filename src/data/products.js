export const products = [
    {
        id: 1,
        icon: '🎬',
        title: 'Alight Motion Premium',
        description: 'Versi premium aplikasi Alight Motion dengan fitur lengkap tanpa watermark',
        pricing: {
            type: 'simple',
            items: [
                { label: 'Public account:', value: 'Rp.10.000/tahun' },
                { label: 'Private account:', value: 'Rp.20.000/tahun' }
            ]
        },
        buttonText: 'Beli via WhatsApp',
        whatsappUrl: 'https://wa.me/6289698988955?text=Halo%20saya%20ingin%20membeli%20Alight%20Motion%20Premium'
    },
    {
        id: 2,
        icon: '🎨',
        title: 'Jasa Design',
        description: 'Jasa desain digital mulai dari poster, logo, hingga konten media sosial',
        pricing: {
            type: 'simple',
            items: [
                { label: 'Harga:', value: 'Rp.10.000' }
            ]
        },
        buttonText: 'Pesan via WhatsApp',
        whatsappUrl: 'https://wa.me/6289698988955?text=Halo%20saya%20ingin%20memesan%20Jasa%20Design'
    },
    {
        id: 3,
        icon: '🤖',
        title: 'Sewa Bot WhatsApp',
        description: 'Layanan sewa bot WhatsApp otomatis untuk grup, bisnis, atau komunitas',
        pricing: {
            type: 'detailed',
            sections: [
                {
                    title: 'Sewa Harian & Mingguan',
                    items: [
                        { label: '1 hari', value: 'Rp.1.000' },
                        { label: '5 hari', value: 'Rp.3.500' },
                        { label: '7 hari', value: 'Rp.6.000' }
                    ]
                },
                {
                    title: 'Sewa Perbulan',
                    items: [
                        { label: '1 bulan', value: 'Rp.15.000' },
                        { label: '3 bulan', value: 'Rp.35.000' },
                        { label: '6 bulan', value: 'Rp.65.000' }
                    ]
                },
                {
                    title: 'Premium VVIP Grup',
                    note: '(Admin jadi user premium)',
                    isPremium: true,
                    items: [
                        { label: '1 bulan', value: 'Rp.30.000' },
                        { label: '3 bulan', value: 'Rp.55.000' }
                    ]
                }
            ]
        },
        buttonText: 'Sewa via WhatsApp',
        whatsappUrl: 'https://wa.me/6289698988955?text=Halo%20saya%20ingin%20menyewa%20Bot%20WhatsApp'
    }
];
