"use client"

import { SectionHeader } from "@/components/common"
import { AchievementItem } from "./achievement-item"
import { useCallback } from "react"

const achievements = [
  {
    title: "CrossCert: A Privacy-Preserving Cross-Chain System for Educational Credential Verification Using Zero-Knowledge Proof",
    description: "Accepted at EAI INISCOM 2024 – 10th EAI International Conference on Industrial Networks and Intelligent Systems.",
    links: [
      {
        title: "UIT Press Release",
        href: "https://www.uit.edu.vn/sinh-vien-nganh-mang-may-tinh-va-truyen-thong-du-lieu-trinh-bay-bao-cao-ket-qua-nghien-cuu-tai-hoi-nghi-khoa-hoc-quoc-te-eai-iniscom-2024-10th-eai"
      },
      {
        title: "Springer Link",
        href: "https://link.springer.com/chapter/10.1007/978-3-031-67357-3_18"
      }
    ]
  },
  {
    title: "Zk-Auction: A Cross-Blockchain System for Efficient Auctions Combining Zero-Knowledge Proof and NFT",
    description: "Accepted at ICIIT 2024 – 9th International Conference on Intelligent Information Technology.",
    links: [
      {
        title: "UIT Press Release",
        href: "https://www.uit.edu.vn/02-sinh-vien-khoa-mang-may-tinh-va-truyen-thong-trinh-bay-bao-cao-ket-qua-nghien-cuu-tai-hoi-nghi-khoa-hoc-quoc-te-2024-9th-international-conference"
      },
      {
        title: "Springer Link",
        href: "https://dl.acm.org/doi/10.1145/3654522.3654589"
      }
    ]
  },
  {
    title: "Net Challenge 2022",
    description: "Team Bao DRL - Second Place",
    links: [
      {
        title: "UIT Press Release",
        href: "https://www.uit.edu.vn/net-challenge-2022-tong-ket-chuong-trinh"
      },
    ]
  },
]

export const Achievements = () => {
  const renderAchievement = useCallback((achievement: typeof achievements[0], index: number) => {
    return <AchievementItem key={achievement.title} achievement={achievement} index={index} />
  }, [])

  return (
    <section id="achievements" className="space-y-8">
      <SectionHeader title="achievements" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {achievements.map(renderAchievement)}
      </div>
    </section>
  )
}