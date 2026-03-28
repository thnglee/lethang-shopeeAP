'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem, Experience as ExperienceType } from '@/components/experience/ExperienceItem';

const experiences: ExperienceType[] = [
    {
        id: '01',
        role: 'Growth & Business Development',
        company: 'ECOMUP',
        period: '01/2026 – Present',
        location: 'Hanoi',
        description: 'Research and evaluate product opportunities across categories by analyzing market trends, competitor positioning, and customer demand to inform category expansion decisions. Drive seller-side growth by identifying high-potential product lines, coordinating go-to-market launches, and aligning cross-functional teams on revenue targets. Build and maintain data dashboards to monitor category performance, translating insights into actionable growth strategies.',
        skills: ['Product Research', 'Category Growth', 'Go-to-Market', 'Data Analytics', 'Cross-functional Coordination'],
        links: [],
        media: []
    },
    {
        id: '02',
        role: 'E-commerce Operations & Growth',
        company: 'Tai Chinh Xanh JSC.',
        period: '09/2025 – 12/2025',
        location: 'Ha Noi',
        description: 'Managed day-to-day e-commerce operations for the "Softie" brand, keeping marketing, operations, and finance teams aligned on business priorities and growth targets. Coordinated with creative and marketing teams to plan and execute promotional campaigns, iterating on underperforming initiatives to improve ROI. Analyzed sales and operational reports to identify cost-reduction and revenue-growth opportunities, feeding findings into strategic planning.',
        skills: ['E-commerce Operations', 'Cross-functional Coordination', 'Revenue Analysis'],
        links: [
            { text: 'Website', url: 'https://www.taichinhxanh.info/' },
            { text: 'Article', url: 'https://tienphong.vn/nhung-ong-chu-sinh-vien-khoi-nghiep-xanh-post1802928.tpo?fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNDM3NjI2MzE2OTczNzg4AAEeGkoYZZsUdFcfhb7no7_bJsMJtXoL5ZxRInEbC4s2ldDWgwgD3kJzRwZS1XQ_aem_ZkNh2DnUVBg-S98zMQdueQ' }
        ],
        media: [
            { type: 'image', src: '/tcx/tcx.jpg' },
            { type: 'image', src: '/tcx/sof.jpg' }
        ]
    },
    {
        id: '03',
        role: 'Growth & Business Development',
        company: 'NextStart Incubator — NextTech',
        period: '06/2025 – 10/2025',
        location: 'Hanoi',
        description: 'Conducted market research and competitive analysis for D2C product concepts, validating demand and identifying target audience segments before go-to-market. Developed go-to-market strategies and pitched growth plans to mentors and industry experts. Collaborated across product, marketing, and tech teams to align business development efforts with customer acquisition goals.',
        skills: ['Market Research', 'Go-to-Market Strategy', 'Business Development', 'D2C'],
        links: [
            { text: 'Article', url: 'https://trading.vietcap.com.vn/ai-news/post-detail/nextstart-incubator-vuon-uom-tai-nang-khoi-nghiep-chao-don-khoa-dau-tien' },
            { text: 'Project', url: 'https://nextcapy.studio' }
        ],
        media: [
            { type: 'image', src: '/nextstart/ns.jpg' },
            { type: 'image', src: '/nextstart/nss.jpg' }
        ]
    },
    {
        id: '04',
        role: 'Growth Analyst',
        company: 'Thinkmay CO.,LTD',
        period: '06/2025 – 09/2025',
        location: 'Hanoi',
        description: 'Worked directly with the CEO to define growth priorities and align business initiatives with market positioning goals. Conducted user research and landing page analysis to identify friction points and improve conversion rates. Managed content and campaign planning from concept to execution, with a focus on user acquisition and engagement.',
        skills: ['Growth Strategy', 'User Research', 'Stakeholder Management'],
        links: [
            { text: 'Website', url: 'https://thinkmay.net/' },
            { text: 'Tiktok', url: 'https://www.tiktok.com/@thangoncloud' },
        ],
        media: [
            { type: 'image', src: '/thinkmay/thinkmay-1.png' },
            { type: 'image', src: '/thinkmay/tmay.png' }
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 md:py-32 bg-obsidian text-white relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,164,126,0.05),transparent_40%)] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
                        Professional <span className="font-serif italic text-gold-accent">Experience</span>
                    </h2>
                    <p className="text-text-body/60 max-w-lg text-lg">
                        A timeline of my professional journey and contributions.
                    </p>
                </motion.div>

                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pl-8 md:pl-16">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={exp.id} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
