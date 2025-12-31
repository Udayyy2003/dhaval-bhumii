import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Decorative hearts */}
      <div className="fixed top-10 left-10 text-accent/20 animate-pulse">
        <Heart className="w-8 h-8 fill-current" />
      </div>
      <div className="fixed bottom-20 right-16 text-accent/20 animate-pulse delay-500">
        <Heart className="w-6 h-6 fill-current" />
      </div>
      <div className="fixed top-1/3 right-12 text-accent/20 animate-pulse delay-1000">
        <Sparkles className="w-6 h-6" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Heart className="w-4 h-4 fill-current" />
            <span>December 31, 2024</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-4 text-balance">
            To Bhumi,
            <br />
            <span className="text-accent">With All My Love</span>
          </h1>
        </div>

        {/* Love Letter */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-border/50">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/90 leading-relaxed mb-6 text-lg">My Dearest Bhumi,</p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              As we stand at the threshold of a new year, I find myself reflecting on these incredible seven months
              we&apos;ve shared together. From the moment you walked into my life, everything changed in the most
              beautiful way possible.
            </p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              You&apos;ve brought light into my days and warmth into my heart. Your smile has become my favorite sight,
              your laughter my favorite sound, and your happiness my greatest goal. Every moment with you feels like a
              gift I never knew I needed but now can&apos;t imagine living without.
            </p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              These past months have been filled with countless memories - from our late-night conversations to our
              shared dreams, from silly jokes to deep connections. You&apos;ve shown me what it means to truly care for
              someone, to support them, and to grow together.
            </p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              Your kindness, your strength, your beautiful soul - they inspire me every single day. You make me want to
              be a better person, to reach for the stars, and to build a future filled with love and joy. With you,
              I&apos;ve found not just a partner, but my best friend, my confidant, my everything.
            </p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              As we welcome 2025 together, I want you to know that my love for you grows stronger with each passing day.
              I promise to cherish you, support you, and stand by your side through everything life brings our way. You
              are my today and all of my tomorrows.
            </p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              Thank you for choosing me, for trusting me with your heart, and for making these seven months the most
              incredible journey of my life. Here&apos;s to many more years of love, laughter, and beautiful memories
              together.
            </p>

            <p className="text-foreground/90 leading-relaxed mb-2 text-lg">Forever yours,</p>
            <p className="text-accent font-semibold text-2xl">Dhaval</p>
          </div>
        </div>

        {/* CTA to Memories */}
        <div className="text-center py-12">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-muted-foreground animate-bounce">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">There&apos;s more...</span>
            </div>
          </div>
          <Link href="/memories">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2 fill-current" />
              Relive Our 2024 Memories
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
