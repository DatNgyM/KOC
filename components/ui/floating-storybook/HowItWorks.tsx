'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FloatingElement } from './FloatingElement';

const steps = [
    {
        id: 1,
        title: "Deal Giá Rẻ Vô Địch",
        desc: "Tổng hợp deal ngon - bổ - rẻ từ khắp các sàn. Bạn chỉ việc chọn, giá hời cứ để chúng mình lo!",
        image: "/assets/illustrations/blush/buyingonline2.png", 
        color: "bg-red-100",
        rotate: "-rotate-2"
    },
    {
        id: 2,
        title: "Chọn Lọc Chất Lượng",
        desc: "Không lo hàng kém chất lượng. Mọi sản phẩm đều được review và chọn lọc kỹ càng trước khi đến tay bạn.",
        image: "/assets/illustrations/blush/pointer.png",
        color: "bg-blue-100",
        rotate: "rotate-2"
    },
    {
        id: 3,
        title: "Tiết Kiệm Túi Tiền",
        desc: "Mua sắm thông minh giúp bạn tiết kiệm tối đa. Vừa có đồ xinh, vừa rủng rỉnh túi tiền!",
        image: "/assets/illustrations/blush/mailsuccess.png",
        color: "bg-green-100",
        rotate: "-rotate-1"
    }
];

export const HowItWorks = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-friendly-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-friendly-secondary/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="font-hand text-5xl md:text-6xl text-friendly-dark mb-6">Mua Sắm Thông Minh - Giá Rẻ Bất Ngờ</h2>
                    <p className="font-display text-xl text-friendly-dark/70">Tại đây, bạn luôn là &quot;thượng đế&quot; với những ưu đãi độc quyền tốt nhất.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-dashed border-t-2 border-dashed border-gray-300 -z-10 transform -translate-y-1/2" />

                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className={`relative z-10 bg-white p-8 rounded-[2rem] shadow-xl border-4 border-white ${step.rotate} hover:rotate-0 transition-transform duration-300 h-full flex flex-col items-center text-center`}>
                                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center font-hand text-2xl font-bold text-friendly-dark mb-6 absolute -top-6 shadow-sm`}>
                                    {step.id}
                                </div>
                                
                                <div className="h-40 w-full flex items-center justify-center mb-6">
                                     <FloatingElement duration={3} yOffset={10}>
                                        <Image src={step.image} alt={step.title} width={160} height={160} className="object-contain" />
                                     </FloatingElement>
                                </div>

                                <h3 className="font-display font-bold text-xl text-friendly-dark mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-base font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
