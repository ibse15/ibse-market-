// ==================== نظام قاعدة البيانات المتقدم ====================
const EleganceDB = {
    // ==================== التهيئة ====================
    init() {
        if (!localStorage.getItem('elegance_db_v2')) {
            this.seedData();
            localStorage.setItem('elegance_db_v2', 'initialized');
        }
        return this;
    },

    // ==================== البيانات الأولية ====================
    seedData() {
        // التصنيفات
        this.setData('categories', [
            { id: 1, name: 'إلكترونيات', nameEn: 'electronics', icon: 'fas fa-laptop', color: '#3b82f6', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400', productsCount: 0, active: true, createdAt: '2024-01-01' },
            { id: 2, name: 'أزياء رجالية', nameEn: 'men-fashion', icon: 'fas fa-male', color: '#1e40af', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400', productsCount: 0, active: true, createdAt: '2024-01-01' },
            { id: 3, name: 'أزياء نسائية', nameEn: 'women-fashion', icon: 'fas fa-female', color: '#ec4899', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400', productsCount: 0, active: true, createdAt: '2024-01-01' },
            { id: 4, name: 'ساعات ومجوهرات', nameEn: 'watches', icon: 'fas fa-gem', color: '#f59e0b', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', productsCount: 0, active: true, createdAt: '2024-01-01' },
            { id: 5, name: 'الجمال والعناية', nameEn: 'beauty', icon: 'fas fa-spa', color: '#8b5cf6', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400', productsCount: 0, active: true, createdAt: '2024-01-01' },
            { id: 6, name: 'الرياضة', nameEn: 'sports', icon: 'fas fa-futbol', color: '#10b981', image: 'https://images.unsplash.com/photo-1461896836934- voices-of-the-game?w=400', productsCount: 0, active: true, createdAt: '2024-01-01' },
            { id: 7, name: 'المنزل والمطبخ', nameEn: 'home', icon: 'fas fa-home', color: '#ef4444', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400', productsCount: 0, active: true, createdAt: '2024-01-01' },
            { id: 8, name: 'الأطفال', nameEn: 'kids', icon: 'fas fa-baby', color: '#06b6d4', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400', productsCount: 0, active: true, createdAt: '2024-01-01' }
        ]);

        // المنتجات
        this.setData('products', [
            { id: 1, name: 'آيفون 15 برو ماكس 256GB', sku: 'IPH15PM-256', price: 5499, oldPrice: 5999, cost: 4500, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400', images: [], categoryId: 1, category: 'electronics', rating: 5, reviews: 128, badge: 'جديد', stock: 50, sold: 234, active: true, featured: true, description: 'أحدث هاتف من آبل مع شريحة A17 Pro وكاميرا 48 ميجابكسل', specifications: 'شاشة 6.7 بوصة، ذاكرة 256GB، رام 8GB', createdAt: '2024-01-15', views: 1520 },
            { id: 2, name: 'لابتوب ماك بوك برو M3', sku: 'MBP-M3-14', price: 8999, oldPrice: 9999, cost: 7500, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', images: [], categoryId: 1, category: 'electronics', rating: 5, reviews: 89, badge: 'الأكثر مبيعاً', stock: 30, sold: 156, active: true, featured: true, description: 'لابتوب احترافي مع شريحة M3 الجديدة', specifications: 'شاشة 14 بوصة، ذاكرة 512GB، رام 16GB', createdAt: '2024-01-20', views: 2340 },
            { id: 3, name: 'سماعات AirPods Pro 2', sku: 'APP2-USB-C', price: 899, oldPrice: 1099, cost: 700, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400', images: [], categoryId: 1, category: 'electronics', rating: 4, reviews: 256, badge: '', stock: 100, sold: 567, active: true, featured: false, description: 'سماعات لاسلكية مع إلغاء الضوضاء النشط', specifications: 'بلوتوث 5.3، عمر البطارية 6 ساعات', createdAt: '2024-01-10', views: 3200 },
            { id: 4, name: 'ساعة Apple Watch Ultra 2', sku: 'AWU2-49MM', price: 3199, oldPrice: 3499, cost: 2600, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400', images: [], categoryId: 4, category: 'watches', rating: 5, reviews: 67, badge: 'خصم', stock: 45, sold: 89, active: true, featured: true, description: 'ساعة ذكية للمغامرين مع GPS مزدوج', specifications: 'شاشة 49mm، مقاومة للماء 100 متر', createdAt: '2024-02-01', views: 1890 },
            { id: 5, name: 'حقيبة يد جلد طبيعي', sku: 'BAG-LTH-001', price: 699, oldPrice: 999, cost: 450, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400', images: [], categoryId: 3, category: 'women-fashion', rating: 4, reviews: 45, badge: '', stock: 25, sold: 78, active: true, featured: false, description: 'حقيبة يد فاخرة من الجلد الطبيعي الإيطالي', specifications: 'جلد طبيعي 100%، مقاس 30x25 سم', createdAt: '2024-02-05', views: 890 },
            { id: 6, name: 'نظارة شمسية راي بان أصلية', sku: 'RB-AVI-001', price: 599, oldPrice: 799, cost: 380, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400', images: [], categoryId: 4, category: 'watches', rating: 4, reviews: 123, badge: '', stock: 60, sold: 234, active: true, featured: false, description: 'نظارة شمسية أصلية من راي بان موديل Aviator', specifications: 'عدسات بولاريزد، إطار معدني', createdAt: '2024-01-25', views: 1560 },
            { id: 7, name: 'قميص رسمي قطن مصري', sku: 'SHT-EGY-WHT', price: 299, oldPrice: 399, cost: 150, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400', images: [], categoryId: 2, category: 'men-fashion', rating: 4, reviews: 89, badge: 'جديد', stock: 80, sold: 156, active: true, featured: false, description: 'قميص رسمي من القطن المصري الفاخر', specifications: 'قطن مصري 100%، قصة سليم فيت', createdAt: '2024-02-10', views: 670 },
            { id: 8, name: 'حذاء نايك اير ماكس', sku: 'NK-AM-BLK', price: 799, oldPrice: 999, cost: 520, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400', images: [], categoryId: 6, category: 'sports', rating: 5, reviews: 234, badge: '', stock: 40, sold: 345, active: true, featured: true, description: 'حذاء رياضي مريح للجري والتمارين', specifications: 'تقنية Air Max، نعل مطاطي مرن', createdAt: '2024-01-18', views: 2100 },
            { id: 9, name: 'عطر ديور سوفاج 100مل', sku: 'DIOR-SAV-100', price: 450, oldPrice: 550, cost: 280, image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400', images: [], categoryId: 5, category: 'beauty', rating: 5, reviews: 178, badge: 'الأكثر مبيعاً', stock: 35, sold: 289, active: true, featured: true, description: 'عطر رجالي فاخر من ديور', specifications: 'حجم 100مل، تركيز Eau de Parfum', createdAt: '2024-02-08', views: 1450 },
            { id: 10, name: 'طقم مكياج احترافي', sku: 'MKP-PRO-SET', price: 899, oldPrice: 1299, cost: 550, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400', images: [], categoryId: 5, category: 'beauty', rating: 4, reviews: 67, badge: 'خصم', stock: 20, sold: 45, active: true, featured: false, description: 'طقم مكياج احترافي شامل 24 قطعة', specifications: '24 قطعة، ماركات عالمية', createdAt: '2024-02-12', views: 780 },
            { id: 11, name: 'سماعات سوني WH-1000XM5', sku: 'SONY-WH5-BLK', price: 1299, oldPrice: 1499, cost: 950, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', images: [], categoryId: 1, category: 'electronics', rating: 5, reviews: 145, badge: '', stock: 55, sold: 189, active: true, featured: true, description: 'سماعات لاسلكية مع أفضل إلغاء ضوضاء', specifications: 'بلوتوث 5.2، بطارية 30 ساعة', createdAt: '2024-01-28', views: 1980 },
            { id: 12, name: 'جهاز بلايستيشن 5', sku: 'PS5-STD-WHT', price: 2199, oldPrice: 2499, cost: 1800, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400', images: [], categoryId: 1, category: 'electronics', rating: 5, reviews: 312, badge: 'الأكثر مبيعاً', stock: 15, sold: 456, active: true, featured: true, description: 'جهاز ألعاب بلايستيشن 5 النسخة القياسية', specifications: 'SSD 825GB، 4K 120Hz', createdAt: '2024-01-05', views: 4500 }
        ]);

        // العملاء
        this.setData('customers', [
            { id: 1, name: 'أحمد محمد الغامدي', email: 'ahmed@example.com', phone: '0501234567', password: '123456', address: 'الرياض، حي النخيل، شارع الملك فهد', city: 'الرياض', orders: 5, totalSpent: 8500, points: 850, status: 'active', avatar: 'https://i.pravatar.cc/150?img=1', joinDate: '2024-01-15', lastOrder: '2024-03-10' },
            { id: 2, name: 'سارة أحمد العتيبي', email: 'sara@example.com', phone: '0559876543', password: '123456', address: 'جدة، حي الروضة، شارع التحلية', city: 'جدة', orders: 8, totalSpent: 12500, points: 1250, status: 'active', avatar: 'https://i.pravatar.cc/150?img=5', joinDate: '2024-01-20', lastOrder: '2024-03-12' },
            { id: 3, name: 'خالد عبدالله الشمري', email: 'khaled@example.com', phone: '0541112233', password: '123456', address: 'الدمام، حي الفيصلية، شارع الأمير محمد', city: 'الدمام', orders: 12, totalSpent: 18000, points: 1800, status: 'vip', avatar: 'https://i.pravatar.cc/150?img=3', joinDate: '2024-01-05', lastOrder: '2024-03-14' },
            { id: 4, name: 'نورة سعد القحطاني', email: 'noura@example.com', phone: '0551234567', password: '123456', address: 'الرياض، حي العليا، طريق الملك عبدالعزيز', city: 'الرياض', orders: 3, totalSpent: 4200, points: 420, status: 'active', avatar: 'https://i.pravatar.cc/150?img=9', joinDate: '2024-02-01', lastOrder: '2024-03-08' },
            { id: 5, name: 'فهد محمد الدوسري', email: 'fahad@example.com', phone: '0561234567', password: '123456', address: 'مكة، حي العزيزية، شارع إبراهيم الخليل', city: 'مكة', orders: 6, totalSpent: 9800, points: 980, status: 'active', avatar: 'https://i.pravatar.cc/150?img=8', joinDate: '2024-01-25', lastOrder: '2024-03-11' }
        ]);

        // الطلبات
        this.setData('orders', [
            { id: 10001, customerId: 1, customerName: 'أحمد محمد الغامدي', customerEmail: 'ahmed@example.com', customerPhone: '0501234567', products: [{id: 1, name: 'آيفون 15 برو ماكس', qty: 1, price: 5499, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400'}], subtotal: 5499, shipping: 0, discount: 0, total: 5499, status: 'delivered', paymentMethod: 'visa', paymentStatus: 'paid', address: 'الرياض، حي النخيل، شارع الملك فهد', city: 'الرياض', notes: '', date: '2024-03-01', deliveryDate: '2024-03-03', trackingNumber: 'TRK001234' },
            { id: 10002, customerId: 2, customerName: 'سارة أحمد العتيبي', customerEmail: 'sara@example.com', customerPhone: '0559876543', products: [{id: 5, name: 'حقيبة يد جلد طبيعي', qty: 1, price: 699, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400'}, {id: 6, name: 'نظارة شمسية راي بان', qty: 1, price: 599, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400'}], subtotal: 1298, shipping: 25, discount: 50, total: 1273, status: 'shipped', paymentMethod: 'cod', paymentStatus: 'pending', address: 'جدة، حي الروضة، شارع التحلية', city: 'جدة', notes: 'الرجاء التواصل قبل التوصيل', date: '2024-03-10', deliveryDate: null, trackingNumber: 'TRK001235' },
            { id: 10003, customerId: 3, customerName: 'خالد عبدالله الشمري', customerEmail: 'khaled@example.com', customerPhone: '0541112233', products: [{id: 2, name: 'لابتوب ماك بوك برو M3', qty: 1, price: 8999, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400'}], subtotal: 8999, shipping: 0, discount: 200, total: 8799, status: 'processing', paymentMethod: 'mada', paymentStatus: 'paid', address: 'الدمام، حي الفيصلية، شارع الأمير محمد', city: 'الدمام', notes: '', date: '2024-03-12', deliveryDate: null, trackingNumber: '' },
            { id: 10004, customerId: 1, customerName: 'أحمد محمد الغامدي', customerEmail: 'ahmed@example.com', customerPhone: '0501234567', products: [{id: 4, name: 'ساعة Apple Watch Ultra 2', qty: 1, price: 3199, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400'}], subtotal: 3199, shipping: 0, discount: 0, total: 3199, status: 'pending', paymentMethod: 'visa', paymentStatus: 'paid', address: 'الرياض، حي النخيل، شارع الملك فهد', city: 'الرياض', notes: '', date: '2024-03-14', deliveryDate: null, trackingNumber: '' },
            { id: 10005, customerId: 2, customerName: 'سارة أحمد العتيبي', customerEmail: 'sara@example.com', customerPhone: '0559876543', products: [{id: 3, name: 'سماعات AirPods Pro 2', qty: 2, price: 899, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400'}], subtotal: 1798, shipping: 0, discount: 100, total: 1698, status: 'pending', paymentMethod: 'applepay', paymentStatus: 'paid', address: 'جدة، حي الروضة، شارع التحلية', city: 'جدة', notes: 'هدية - الرجاء التغليف', date: '2024-03-15', deliveryDate: null, trackingNumber: '' },
            { id: 10006, customerId: 4, customerName: 'نورة سعد القحطاني', customerEmail: 'noura@example.com', customerPhone: '0551234567', products: [{id: 9, name: 'عطر ديور سوفاج', qty: 1, price: 450, image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400'}, {id: 10, name: 'طقم مكياج احترافي', qty: 1, price: 899, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400'}], subtotal: 1349, shipping: 25, discount: 0, total: 1374, status: 'delivered', paymentMethod: 'visa', paymentStatus: 'paid', address: 'الرياض، حي العليا، طريق الملك عبدالعزيز', city: 'الرياض', notes: '', date: '2024-03-08', deliveryDate: '2024-03-10', trackingNumber: 'TRK001230' },
            { id: 10007, customerId: 5, customerName: 'فهد محمد الدوسري', customerEmail: 'fahad@example.com', customerPhone: '0561234567', products: [{id: 12, name: 'جهاز بلايستيشن 5', qty: 1, price: 2199, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400'}], subtotal: 2199, shipping: 0, discount: 0, total: 2199, status: 'shipped', paymentMethod: 'mada', paymentStatus: 'paid', address: 'مكة، حي العزيزية، شارع إبراهيم الخليل', city: 'مكة', notes: '', date: '2024-03-11', deliveryDate: null, trackingNumber: 'TRK001238' },
            { id: 10008, customerId: 3, customerName: 'خالد عبدالله الشمري', customerEmail: 'khaled@example.com', customerPhone: '0541112233', products: [{id: 8, name: 'حذاء نايك اير ماكس', qty: 2, price: 799, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400'}], subtotal: 1598, shipping: 0, discount: 150, total: 1448, status: 'cancelled', paymentMethod: 'cod', paymentStatus: 'refunded', address: 'الدمام، حي الفيصلية، شارع الأمير محمد', city: 'الدمام', notes: 'العميل ألغى الطلب', date: '2024-03-05', deliveryDate: null, trackingNumber: '' }
        ]);

        // الكوبونات
        this.setData('coupons', [
            { id: 1, code: 'WELCOME10', type: 'percentage', value: 10, minOrder: 100, maxDiscount: 100, usageLimit: 1000, usedCount: 234, startDate: '2024-01-01', endDate: '2024-12-31', active: true, description: 'خصم ترحيبي للعملاء الجدد' },
            { id: 2, code: 'SAVE50', type: 'fixed', value: 50, minOrder: 500, maxDiscount: 50, usageLimit: 500, usedCount: 89, startDate: '2024-03-01', endDate: '2024-03-31', active: true, description: 'خصم ثابت 50 ريال' },
            { id: 3, code: 'VIP20', type: 'percentage', value: 20, minOrder: 1000, maxDiscount: 500, usageLimit: 100, usedCount: 45, startDate: '2024-01-01', endDate: '2024-12-31', active: true, description: 'خصم خاص لعملاء VIP' },
            { id: 4, code: 'FREESHIP', type: 'shipping', value: 100, minOrder: 200, maxDiscount: 50, usageLimit: 2000, usedCount: 567, startDate: '2024-01-01', endDate: '2024-12-31', active: true, description: 'شحن مجاني' }
        ]);

        // الإعدادات
        this.setData('settings', {
            store: {
                name: 'متجر الأناقة',
                nameEn: 'Elegance Store',
                email: 'info@elegance.com',
                phone: '920012345',
                whatsapp: '966501234567',
                address: 'الرياض، المملكة العربية السعودية',
                logo: '',
                favicon: '',
                description: 'وجهتك الأولى للتسوق الإلكتروني',
                currency: 'SAR',
                currencySymbol: 'ر.س',
                taxRate: 15,
                taxEnabled: true
            },
            shipping: {
                defaultCost: 25,
                freeShippingMin: 200,
                enableCOD: true,
                codFee: 10,
                estimatedDays: '2-5',
                regions: [
                    { name: 'الرياض', cost: 20, days: '1-2' },
                    { name: 'جدة', cost: 25, days: '2-3' },
                    { name: 'الدمام', cost: 25, days: '2-3' },
                    { name: 'مكة', cost: 30, days: '2-4' },
                    { name: 'المدينة', cost: 30, days: '2-4' },
                    { name: 'مناطق أخرى', cost: 40, days: '3-5' }
                ]
            },
            payment: {
                visa: true,
                mastercard: true,
                mada: true,
                applePay: true,
                stcPay: true,
                cod: true,
                bankTransfer: true,
                bankDetails: {
                    bankName: 'البنك الأهلي',
                    accountName: 'مؤسسة الأناقة للتجارة',
                    accountNumber: '1234567890',
                    iban: 'SA1234567890123456789012'
                }
            },
            notifications: {
                emailEnabled: true,
                smsEnabled: true,
                orderConfirmation: true,
                orderShipped: true,
                orderDelivered: true,
                lowStock: true,
                lowStockThreshold: 10
            },
            social: {
                facebook: 'https://facebook.com/elegancestore',
                twitter: 'https://twitter.com/elegancestore',
                instagram: 'https://instagram.com/elegancestore',
                snapchat: 'elegancestore',
                tiktok: '@elegancestore',
                youtube: 'https://youtube.com/elegancestore'
            },
            seo: {
                metaTitle: 'متجر الأناقة | تسوق أفضل المنتجات',
                metaDescription: 'اكتشف أفضل المنتجات والعروض الحصرية في متجر الأناقة',
                metaKeywords: 'تسوق، متجر، إلكترونيات، أزياء، ساعات',
                googleAnalytics: '',
                facebookPixel: ''
            }
        });

        // المسؤولين
        this.setData('admins', [
            { id: 1, name: 'مدير النظام', email: 'admin@elegance.com', password: 'admin123', role: 'super_admin', permissions: ['all'], avatar: 'https://i.pravatar.cc/150?img=68', lastLogin: '2024-03-15', active: true }
        ]);

        // سجل النشاطات
        this.setData('activityLog', [
            { id: 1, userId: 1, userType: 'admin', action: 'login', description: 'تسجيل دخول المسؤول', ip: '192.168.1.1', date: '2024-03-15 10:30:00' },
            { id: 2, userId: 1, userType: 'admin', action: 'product_add', description: 'إضافة منتج جديد: آيفون 15', ip: '192.168.1.1', date: '2024-03-15 10:35:00' },
            { id: 3, userId: 1, userType: 'customer', action: 'order_create', description: 'طلب جديد #10001', ip: '192.168.1.100', date: '2024-03-15 11:00:00' }
        ]);

        // الرسائل والتذاكر
        this.setData('tickets', [
            { id: 1, customerId: 1, customerName: 'أحمد محمد', subject: 'استفسار عن طلب', message: 'متى سيصل طلبي؟', status: 'open', priority: 'medium', date: '2024-03-14', replies: [] },
            { id: 2, customerId: 2, customerName: 'سارة أحمد', subject: 'مشكلة في المنتج', message: 'المنتج وصل تالف', status: 'in_progress', priority: 'high', date: '2024-03-13', replies: [{from: 'admin', message: 'نعتذر عن ذلك، سنقوم بإرسال بديل', date: '2024-03-13'}] }
        ]);

        // الإحصائيات اليومية
        this.setData('dailyStats', [
            { date: '2024-03-01', orders: 15, sales: 25000, visitors: 450, newCustomers: 8 },
            { date: '2024-03-02', orders: 12, sales: 18000, visitors: 380, newCustomers: 5 },
            { date: '2024-03-03', orders: 18, sales: 32000, visitors: 520, newCustomers: 12 },
            { date: '2024-03-04', orders: 22, sales: 41000, visitors: 680, newCustomers: 15 },
            { date: '2024-03-05', orders: 14, sales: 22000, visitors: 420, newCustomers: 6 },
            { date: '2024-03-06', orders: 25, sales: 48000, visitors: 750, newCustomers: 18 },
            { date: '2024-03-07', orders: 30, sales: 55000, visitors: 890, newCustomers: 22 },
            { date: '2024-03-08', orders: 28, sales: 52000, visitors: 820, newCustomers: 19 },
            { date: '2024-03-09', orders: 20, sales: 38000, visitors: 560, newCustomers: 11 },
            { date: '2024-03-10', orders: 35, sales: 65000, visitors: 950, newCustomers: 25 },
            { date: '2024-03-11', orders: 32, sales: 58000, visitors: 880, newCustomers: 20 },
            { date: '2024-03-12', orders: 27, sales: 49000, visitors: 720, newCustomers: 16 },
            { date: '2024-03-13', orders: 38, sales: 72000, visitors: 1020, newCustomers: 28 },
            { date: '2024-03-14', orders: 42, sales: 85000, visitors: 1150, newCustomers: 32 },
            { date: '2024-03-15', orders: 45, sales: 92000, visitors: 1280, newCustomers: 35 }
        ]);
    },

    // ==================== الوظائف الأساسية ====================
    getData(key) {
        const data = localStorage.getItem('elegance_' + key);
        return data ? JSON.parse(data) : null;
    },

    setData(key, value) {
        localStorage.setItem('elegance_' + key, JSON.stringify(value));
    },

    generateId() {
        return Date.now() + Math.random().toString(36).substr(2, 9);
    },

    // ==================== المنتجات ====================
    products: {
        getAll() { return EleganceDB.getData('products') || []; },
        getActive() { return this.getAll().filter(p => p.active); },
        getById(id) { return this.getAll().find(p => p.id === id); },
        getBySku(sku) { return this.getAll().find(p => p.sku === sku); },
        getByCategory(category) { return this.getActive().filter(p => p.category === category); },
        getFeatured() { return this.getActive().filter(p => p.featured); },
        search(query) {
            const q = query.toLowerCase();
            return this.getActive().filter(p => 
                p.name.toLowerCase().includes(q) || 
                p.sku.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q)
            );
        },
        add(product) {
            const products = this.getAll();
            product.id = EleganceDB.generateId();
            product.createdAt = new Date().toISOString().split('T')[0];
            product.views = 0;
            product.sold = 0;
            products.push(product);
            EleganceDB.setData('products', products);
            return product;
        },
        update(id, data) {
            const products = this.getAll();
            const index = products.findIndex(p => p.id === id);
            if (index !== -1) {
                products[index] = { ...products[index], ...data };
                EleganceDB.setData('products', products);
                return products[index];
            }
            return null;
        },
        delete(id) {
            const products = this.getAll().filter(p => p.id !== id);
            EleganceDB.setData('products', products);
        },
        updateStock(id, quantity) {
            const product = this.getById(id);
            if (product) {
                this.update(id, { stock: product.stock - quantity, sold: product.sold + quantity });
            }
        },
        incrementViews(id) {
            const product = this.getById(id);
            if (product) {
                this.update(id, { views: product.views + 1 });
            }
        }
    },

    // ==================== التصنيفات ====================
    categories: {
        getAll() { return EleganceDB.getData('categories') || []; },
        getActive() { return this.getAll().filter(c => c.active); },
        getById(id) { return this.getAll().find(c => c.id === id); },
        getBySlug(slug) { return this.getAll().find(c => c.nameEn === slug); },
        add(category) {
            const categories = this.getAll();
            category.id = EleganceDB.generateId();
            category.createdAt = new Date().toISOString().split('T')[0];
            category.productsCount = 0;
            categories.push(category);
            EleganceDB.setData('categories', categories);
            return category;
        },
        update(id, data) {
            const categories = this.getAll();
            const index = categories.findIndex(c => c.id === id);
            if (index !== -1) {
                categories[index] = { ...categories[index], ...data };
                EleganceDB.setData('categories', categories);
                return categories[index];
            }
            return null;
        },
        delete(id) {
            const categories = this.getAll().filter(c => c.id !== id);
            EleganceDB.setData('categories', categories);
        }
    },

    // ==================== العملاء ====================
    customers: {
        getAll() { return EleganceDB.getData('customers') || []; },
        getById(id) { return this.getAll().find(c => c.id === id); },
        getByEmail(email) { return this.getAll().find(c => c.email === email); },
        authenticate(email, password) {
            const customer = this.getByEmail(email);
            if (customer && customer.password === password) {
                return customer;
            }
            return null;
        },
        register(data) {
            if (this.getByEmail(data.email)) {
                return { error: 'البريد الإلكتروني مسجل مسبقاً' };
            }
            const customers = this.getAll();
            data.id = EleganceDB.generateId();
            data.joinDate = new Date().toISOString().split('T')[0];
            data.orders = 0;
            data.totalSpent = 0;
            data.points = 0;
            data.status = 'active';
            customers.push(data);
            EleganceDB.setData('customers', customers);
            return data;
        },
        update(id, data) {
            const customers = this.getAll();
            const index = customers.findIndex(c => c.id === id);
            if (index !== -1) {
                customers[index] = { ...customers[index], ...data };
                EleganceDB.setData('customers', customers);
                return customers[index];
            }
            return null;
        },
        delete(id) {
            const customers = this.getAll().filter(c => c.id !== id);
            EleganceDB.setData('customers', customers);
        },
        addPoints(id, points) {
            const customer = this.getById(id);
            if (customer) {
                this.update(id, { points: customer.points + points });
            }
        }
    },

    // ==================== الطلبات ====================
    orders: {
        getAll() { return EleganceDB.getData('orders') || []; },
        getById(id) { return this.getAll().find(o => o.id === id); },
        getByCustomer(customerId) { return this.getAll().filter(o => o.customerId === customerId); },
        getByStatus(status) { return this.getAll().filter(o => o.status === status); },
        getRecent(limit = 10) { return this.getAll().slice(-limit).reverse(); },
        create(orderData) {
            const orders = this.getAll();
            orderData.id = 10000 + orders.length + 1;
            orderData.date = new Date().toISOString().split('T')[0];
            orderData.status = 'pending';
            orders.push(orderData);
            EleganceDB.setData('orders', orders);
            
            // تحديث إحصائيات العميل
            const customer = EleganceDB.customers.getById(orderData.customerId);
            if (customer) {
                EleganceDB.customers.update(customer.id, {
                    orders: customer.orders + 1,
                    totalSpent: customer.totalSpent + orderData.total,
                    lastOrder: orderData.date
                });
                EleganceDB.customers.addPoints(customer.id, Math.floor(orderData.total / 10));
            }
            
            // تحديث المخزون
            orderData.products.forEach(p => {
                EleganceDB.products.updateStock(p.id, p.qty);
            });
            
            return orderData;
        },
        updateStatus(id, status) {
            return this.update(id, { status });
        },
        update(id, data) {
            const orders = this.getAll();
            const index = orders.findIndex(o => o.id === id);
            if (index !== -1) {
                orders[index] = { ...orders[index], ...data };
                EleganceDB.setData('orders', orders);
                return orders[index];
            }
            return null;
        },
        delete(id) {
            const orders = this.getAll().filter(o => o.id !== id);
            EleganceDB.setData('orders', orders);
        }
    },

    // ==================== الكوبونات ====================
    coupons: {
        getAll() { return EleganceDB.getData('coupons') || []; },
        getActive() { 
            const now = new Date().toISOString().split('T')[0];
            return this.getAll().filter(c => c.active && c.startDate <= now && c.endDate >= now);
        },
        getByCode(code) { return this.getAll().find(c => c.code === code.toUpperCase()); },
        validate(code, orderTotal) {
            const coupon = this.getByCode(code);
            if (!coupon) return { valid: false, error: 'كود الخصم غير صحيح' };
            if (!coupon.active) return { valid: false, error: 'كود الخصم غير مفعل' };
            
            const now = new Date().toISOString().split('T')[0];
            if (coupon.startDate > now) return { valid: false, error: 'كود الخصم لم يبدأ بعد' };
            if (coupon.endDate < now) return { valid: false, error: 'كود الخصم منتهي الصلاحية' };
            if (coupon.usedCount >= coupon.usageLimit) return { valid: false, error: 'كود الخصم استنفذ' };
            if (orderTotal < coupon.minOrder) return { valid: false, error: `الحد الأدنى للطلب ${coupon.minOrder} ر.س` };
            
            let discount = 0;
            if (coupon.type === 'percentage') {
                discount = Math.min((orderTotal * coupon.value / 100), coupon.maxDiscount);
            } else if (coupon.type === 'fixed') {
                discount = coupon.value;
            } else if (coupon.type === 'shipping') {
                discount = coupon.value; // خصم الشحن
            }
            
            return { valid: true, coupon, discount };
        },
        use(code) {
            const coupon = this.getByCode(code);
            if (coupon) {
                this.update(coupon.id, { usedCount: coupon.usedCount + 1 });
            }
        },
        add(coupon) {
            const coupons = this.getAll();
            coupon.id = EleganceDB.generateId();
            coupon.code = coupon.code.toUpperCase();
            coupon.usedCount = 0;
            coupons.push(coupon);
            EleganceDB.setData('coupons', coupons);
            return coupon;
        },
        update(id, data) {
            const coupons = this.getAll();
            const index = coupons.findIndex(c => c.id === id);
            if (index !== -1) {
                coupons[index] = { ...coupons[index], ...data };
                EleganceDB.setData('coupons', coupons);
                return coupons[index];
            }
            return null;
        },
        delete(id) {
            const coupons = this.getAll().filter(c => c.id !== id);
            EleganceDB.setData('coupons', coupons);
        }
    },

    // ==================== الإعدادات ====================
    settings: {
        get() { return EleganceDB.getData('settings') || {}; },
        update(section, data) {
            const settings = this.get();
            settings[section] = { ...settings[section], ...data };
            EleganceDB.setData('settings', settings);
            return settings;
        },
        getStore() { return this.get().store || {}; },
        getShipping() { return this.get().shipping || {}; },
        getPayment() { return this.get().payment || {}; },
        getSocial() { return this.get().social || {}; }
    },

    // ==================== الإحصائيات ====================
    stats: {
        getDashboard() {
            const products = EleganceDB.products.getAll();
            const orders = EleganceDB.orders.getAll();
            const customers = EleganceDB.customers.getAll();
            
            const today = new Date().toISOString().split('T')[0];
            const todayOrders = orders.filter(o => o.date === today);
            
            return {
                totalProducts: products.length,
                activeProducts: products.filter(p => p.active).length,
                lowStockProducts: products.filter(p => p.stock < 10).length,
                outOfStockProducts: products.filter(p => p.stock === 0).length,
                
                totalOrders: orders.length,
                pendingOrders: orders.filter(o => o.status === 'pending').length,
                processingOrders: orders.filter(o => o.status === 'processing').length,
                shippedOrders: orders.filter(o => o.status === 'shipped').length,
                deliveredOrders: orders.filter(o => o.status === 'delivered').length,
                cancelledOrders: orders.filter(o => o.status === 'cancelled').length,
                
                totalCustomers: customers.length,
                activeCustomers: customers.filter(c => c.status === 'active').length,
                vipCustomers: customers.filter(c => c.status === 'vip').length,
                
                totalRevenue: orders.filter(o => o.status !== 'cancelled').reduce((sum, o) => sum + o.total, 0),
                todayRevenue: todayOrders.reduce((sum, o) => sum + o.total, 0),
                todayOrders: todayOrders.length,
                
                averageOrderValue: orders.length > 0 ? Math.round(orders.reduce((sum, o) => sum + o.total, 0) / orders.length) : 0
            };
        },
        
        getSalesChart() {
            return EleganceDB.getData('dailyStats') || [];
        },
        
        getTopProducts(limit = 5) {
            return EleganceDB.products.getAll()
                .sort((a, b) => b.sold - a.sold)
                .slice(0, limit);
        },
        
        getTopCustomers(limit = 5) {
            return EleganceDB.customers.getAll()
                .sort((a, b) => b.totalSpent - a.totalSpent)
                .slice(0, limit);
        },
        
        getOrdersByStatus() {
            const orders = EleganceDB.orders.getAll();
            return {
                pending: orders.filter(o => o.status === 'pending').length,
                processing: orders.filter(o => o.status === 'processing').length,
                shipped: orders.filter(o => o.status === 'shipped').length,
                delivered: orders.filter(o => o.status === 'delivered').length,
                cancelled: orders.filter(o => o.status === 'cancelled').length
            };
        }
    },

    // ==================== سجل النشاطات ====================
    activityLog: {
        getAll() { return EleganceDB.getData('activityLog') || []; },
        add(userId, userType, action, description) {
            const logs = this.getAll();
            logs.push({
                id: EleganceDB.generateId(),
                userId,
                userType,
                action,
                description,
                ip: '192.168.1.1',
                date: new Date().toISOString()
            });
            EleganceDB.setData('activityLog', logs);
        },
        getRecent(limit = 20) {
            return this.getAll().slice(-limit).reverse();
        }
    },

    // ==================== التذاكر ====================
    tickets: {
        getAll() { return EleganceDB.getData('tickets') || []; },
        getOpen() { return this.getAll().filter(t => t.status !== 'closed'); },
        getById(id) { return this.getAll().find(t => t.id === id); },
        add(ticket) {
            const tickets = this.getAll();
            ticket.id = EleganceDB.generateId();
            ticket.status = 'open';
            ticket.date = new Date().toISOString().split('T')[0];
            ticket.replies = [];
            tickets.push(ticket);
            EleganceDB.setData('tickets', tickets);
            return ticket;
        },
        reply(id, from, message) {
            const tickets = this.getAll();
            const index = tickets.findIndex(t => t.id === id);
            if (index !== -1) {
                tickets[index].replies.push({
                    from,
                    message,
                    date: new Date().toISOString()
                });
                if (from === 'admin') {
                    tickets[index].status = 'in_progress';
                }
                EleganceDB.setData('tickets', tickets);
            }
        },
        close(id) {
            this.update(id, { status: 'closed' });
        },
        update(id, data) {
            const tickets = this.getAll();
            const index = tickets.findIndex(t => t.id === id);
            if (index !== -1) {
                tickets[index] = { ...tickets[index], ...data };
                EleganceDB.setData('tickets', tickets);
            }
        }
    },

    // ==================== سلة التسوق ====================
    cart: {
        get() { return EleganceDB.getData('cart') || []; },
        add(product, quantity = 1) {
            const cart = this.get();
            const existing = cart.find(item => item.id === product.id);
            if (existing) {
                existing.quantity += quantity;
            } else {
                cart.push({ ...product, quantity });
            }
            EleganceDB.setData('cart', cart);
            return cart;
        },
        update(productId, quantity) {
            const cart = this.get();
            const item = cart.find(i => i.id === productId);
            if (item) {
                item.quantity = quantity;
                if (item.quantity <= 0) {
                    return this.remove(productId);
                }
                EleganceDB.setData('cart', cart);
            }
            return cart;
        },
        remove(productId) {
            const cart = this.get().filter(i => i.id !== productId);
            EleganceDB.setData('cart', cart);
            return cart;
        },
        clear() {
            EleganceDB.setData('cart', []);
            return [];
        },
        getTotal() {
            return this.get().reduce((sum, item) => sum + (item.price * item.quantity), 0);
        },
        getCount() {
            return this.get().reduce((sum, item) => sum + item.quantity, 0);
        }
    },

    // ==================== المفضلة ====================
    wishlist: {
        get() { return EleganceDB.getData('wishlist') || []; },
        add(product) {
            const wishlist = this.get();
            if (!wishlist.find(p => p.id === product.id)) {
                wishlist.push(product);
                EleganceDB.setData('wishlist', wishlist);
            }
            return wishlist;
        },
        remove(productId) {
            const wishlist = this.get().filter(p => p.id !== productId);
            EleganceDB.setData('wishlist', wishlist);
            return wishlist;
        },
        has(productId) {
            return this.get().some(p => p.id === productId);
        },
        clear() {
            EleganceDB.setData('wishlist', []);
            return [];
        }
    },

    // ==================== المسؤولين ====================
    admins: {
        getAll() { return EleganceDB.getData('admins') || []; },
        authenticate(email, password) {
            const admin = this.getAll().find(a => a.email === email && a.password === password);
            if (admin) {
                this.updateLastLogin(admin.id);
                EleganceDB.activityLog.add(admin.id, 'admin', 'login', 'تسجيل دخول المسؤول');
            }
            return admin;
        },
        updateLastLogin(id) {
            const admins = this.getAll();
            const index = admins.findIndex(a => a.id === id);
            if (index !== -1) {
                admins[index].lastLogin = new Date().toISOString();
                EleganceDB.setData('admins', admins);
            }
        }
    },

    // ==================== إعادة تعيين ====================
    reset() {
        const keys = Object.keys(localStorage).filter(k => k.startsWith('elegance_'));
        keys.forEach(k => localStorage.removeItem(k));
        localStorage.removeItem('elegance_db_v2');
        this.init();
    }
};

// تهيئة قاعدة البيانات
EleganceDB.init();

// تصدير للاستخدام العام
window.DB = EleganceDB;
