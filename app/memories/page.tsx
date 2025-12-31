import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Heart } from "lucide-react"

// const memories = [
//   {
//     month: "April",
//     lines: ["The year began, and so did we", "A fresh start, a love brand new", "Winter whispers brought us close"],
//     image: "/twelve.jpeg",
//   },
//   {
//     month: "May",
//     lines: [
//       "Hearts intertwined on Valentine&apos;s day",
//       "Your love painted my world in shades of rose",
//       "Every moment with you felt like a celebration",
//     ],
//     image: "/thiretnee.jpeg"
//   },
//   {
//     month: "June",
//     lines: [
//       "Spring arrived with blooming flowers",
//       "Just like our love that grew each day",
//       "Together we watched the world come alive",
//     ],
//     image: "/eight.jpeg",
//   },
//   {
//     month: "July",
//     lines: [
//       "April showers brought us closer",
//       "Dancing in the rain, laughing together",
//       "Every drop a memory we&apos;ll treasure",
//     ],
//     image: "/three.jpeg",
//   },
//   {
//     month: "August",
//     lines: [
//       "Sunshine days and endless talks",
//       "Your smile brighter than any summer day",
//       "In your eyes, I found my home",
//     ],
//     image: "/seven.jpeg",
//   },
//   {
//     month: "September",
//     lines: ["Six months of pure bliss", "Celebrating us, celebrating love", "You became my favorite adventure"],
//     image: "/fourteen.jpeg",
//   },
//   {
//     month: "Octomber",
//     lines: [
//       "Mid-year magic with you by my side",
//       "Every sunset shared, every dream talked about",
//       "Our love story writing itself beautifully",
//     ],
//     image: "/nine.jpeg",
//   },
//   {
//     month: "November",
//     lines: [
//       "Late summer nights filled with laughter",
//       "Creating memories under starlit skies",
//       "With you, every moment is extraordinary",
//     ],
//     image: "/temple.jpeg",
//   },
//   {
//     month: "December",
//     lines: [
//       "As leaves began to change colors",
//       "Our love remained constant and true",
//       "Fall in love with you, every single day",
//     ],
//     image: "/bow.jpeg",
//   }
// ]


const memories = [
  {
    month: "April",
    lines: [
      "Where it all quietly began, and my heart chose you.",
      "शुरुआत छोटी थी, पर एहसास बहुत गहरे थे ❤️",
    ],
    image: "/twelve.jpeg",
  },
  {
    month: "May",
    lines: [
      "With you, even ordinary days felt magical.",
      "तुम्हारे साथ हर पल, एक खूबसूरत कहानी बन गया ✨",
    ],
    image: "/thiretnee.jpeg",
  },
  {
    month: "June",
    lines: [
      "Laughs, talks, and a love that felt effortless.",
      "धीरे-धीरे तुम मेरी आदत बनती चली गई 💕",
    ],
    image: "/eight.jpeg",
  },
  {
    month: "July",
    lines: [
      "Rainy days, warm hearts, and endless memories.",
      "तुम्हारे साथ हर मौसम खास लगने लगा ☔❤️",
    ],
    image: "/three.jpeg",
  },
  {
    month: "August",
    lines: [
      "In your smile, I found my safest place.",
      "तुम्हारी हँसी में ही मेरा सुकून है 🌸",
    ],
    image: "/seven.jpeg",
  },
  {
    month: "September",
    lines: [
      "Six months of love, laughter, and us.",
      "आधे साल में ही तुम मेरी दुनिया बन गई 💫",
    ],
    image: "/fourteen.jpeg",
  },
  {
    month: "Octomber",
    lines: [
      "Every moment with you felt meant to be.",
      "तुम्हारे साथ हर ख्वाब सच्चा लगने लगा ✨",
    ],
    image: "/nine.jpeg",
  },
  {
    month: "November",
    lines: [
      "Late nights, deep talks, and closer hearts.",
      "तुम्हारे साथ वक़्त रुक सा जाता है 💖",
    ],
    image: "/temple.jpeg",
  },
  {
    month: "December",
    lines: [
      "Ending the year with you was my biggest blessing.",
      "साल खत्म हो रहा है, पर मेरा प्यार नहीं ❤️",
    ],
    image: "/bow.jpeg",
  },
];

export default function MemoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Letter
            </Button>
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-4 text-balance">Our 2024 Journey</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Twelve months of love, laughter, and unforgettable memories
          </p>
        </div>

        {/* Memory Cards */}
        <div className="space-y-16 md:space-y-24">
          {memories.map((memory, index) => (
            <Card
              key={memory.month}
              className="overflow-hidden border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 0 ? "" : "md:grid-flow-dense"}`}>
                  {/* Image */}
                  <div className={`relative h-64 md:h-96 ${index % 2 === 0 ? "" : "md:col-start-2"}`}>
                    <img
                      src={memory.image || "/placeholder.svg"}
                      alt={memory.month}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center p-8 md:p-12 ${index % 2 === 0 ? "" : "md:col-start-1 md:row-start-1"}`}
                  >
                    <div className="inline-flex items-center gap-2 text-accent mb-4">
                      <Heart className="w-5 h-5 fill-current" />
                      <span className="font-semibold text-lg">{memory.month} 2024</span>
                    </div>
                    <div className="space-y-4">
                      {memory.lines.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-foreground/80 text-lg md:text-xl leading-relaxed italic">
                          &ldquo;{line}&rdquo;
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Message */}
        <div className="text-center mt-20 py-12 border-t border-border/50">
          <Heart className="w-12 h-12 text-accent mx-auto mb-6 fill-current" />
          <p className="text-2xl md:text-3xl font-serif text-primary mb-4">Here&apos;s to many more years together</p>
          <p className="text-muted-foreground text-lg">Happy New Year 2025, My Love!</p>
          <div className="mt-8">
            <Link href="/">
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Read the Letter Again
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
