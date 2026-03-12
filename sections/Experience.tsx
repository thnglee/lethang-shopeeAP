'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem, Experience as ExperienceType } from '@/components/experience/ExperienceItem';

const experiences: ExperienceType[] = [
    {
        id: '01',
        role: 'Performance Marketing Specialist',
        company: 'MISEN CO.LTD',
        period: '01/2026 – 03/2026',
        location: 'Hanoi',
        description: 'Managed Google Ads Search campaigns with a $1,500/day budget across multiple product categories, maintaining target ROAS through bid strategy and keyword optimisation. Developed keyword strategies — match types, negative keyword lists, search term mining — to improve traffic quality and reduce wasted spend. Set up conversion tracking via Google Tag Manager to ensure accurate attribution and inform budget allocation.',
        skills: ['Google Ads', 'Search Campaigns', 'Keyword Strategy', 'Conversion Tracking'],
        links: [
            { text: 'Example 1', url: 'https://www.lyonmax.com/products/shordicut-3' },
            { text: 'Example 2', url: 'https://www.lyonmax.com/products/beanigrix-3' }
        ],
        media: [
            { type: 'image', src: '/misen/misen1.png' },
            { type: 'image', src: '/misen/misen2.png' }
        ]
    },
    {
        id: '02',
        role: 'Shopify Store Operations & CRO',
        company: 'Freelance E-commerce',
        period: '12/2025 – 01/2026',
        location: 'Remote',
        description: 'Ran A/B tests on landing page layouts and offer structures to find better-converting combinations and reduce drop-off. Integrated upsell and post-purchase apps (Kaching Bundles, AI Upsell Cart) alongside Klaviyo email flows to recover abandoned carts and improve AOV. Set up Meta Pixel with custom events for conversion tracking across Shopify storefronts in the supplements niche.',
        skills: ['A/B Testing', 'Meta Pixel', 'Conversion Tracking'],
        links: [
            { text: 'Project', url: 'https://sculptique-html.vercel.app/' },
            { text: 'GitHub', url: 'https://github.com/thnglee/Sculptique-Shopify' }
        ],
        media: [
            { type: 'image', src: '/sculptique/scultique.png' }
        ]
    },
    {
        id: '03',
        role: 'E-commerce Operations & Growth',
        company: 'Tai Chinh Xanh JSC.',
        period: '09/2025 – 12/2025',
        location: 'Ha Noi',
        description: 'Managed day-to-day e-commerce operations for the "Softie" brand, keeping marketing, operations, and finance teams aligned on priorities. Ran Facebook Ads campaigns for the "Softie" brand in coordination with the creative team — managing 2–5M VND/day in ad spend, briefing ad concepts, monitoring delivery and spend, and iterating on underperforming creatives to improve ROAS. Analyzed campaign and sales reports to find cost-reduction and revenue-growth opportunities, feeding findings directly into budget decisions.',
        skills: ['E-commerce Operations', 'Facebook Ads', 'Campaign Optimization'],
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
        id: '04',
        role: 'Growth & Business Development',
        company: 'NextStart Incubator — NextTech',
        period: '06/2025 – 10/2025',
        location: 'Hanoi',
        description: 'Conducted market research and competitive analysis for D2C product concepts, validating demand and identifying target audience segments. Developed go-to-market strategies and pitched growth plans to mentors and industry experts. Collaborated across product, marketing, and tech teams to align campaigns with customer acquisition goals.',
        skills: ['Market Research', 'Go-to-Market Strategy', 'D2C'],
        links: [
            { text: 'Article', url: 'https://trading.vietcap.com.vn/ai-news/post-detail/nextstart-incubator-vuon-uom-tai-nang-khoi-nghiep-chao-don-khoa-dau-tien' },
            { text: 'Project', url: 'nextcapy.studio' }
        ],
        media: [
            { type: 'image', src: '/nextstart/ns.jpg' },
            { type: 'image', src: '/nextstart/nss.jpg' }
        ]
    },
    {
        id: '05',
        role: 'Content Creator & Growth Analyst',
        company: 'Thinkmay CO.,LTD',
        period: '06/2025 – 09/2025',
        location: 'Hanoi',
        description: 'Worked with the CEO to align ad creatives and content with growth and positioning goals. Managed content production from concept to final asset, with a focus on engagement and conversion. Conducted landing page analysis and A/B testing to identify UX friction points and improve conversion rates.',
        skills: ['Ad Creative Production', 'A/B Testing', 'Content Strategy'],
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
                    {/* Timeline Line */}

                    {experiences.map((exp, index) => (
                        <ExperienceItem key={exp.id} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

