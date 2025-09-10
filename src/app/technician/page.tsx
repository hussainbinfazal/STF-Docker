"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function RouterInfoPage() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <main className="max-w-3xl mx-auto p-6">
      <motion.h1 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Router Info
      </motion.h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Current State</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-2">
            <span className="font-semibold">Pathname:</span> {pathname}
          </p>
          <p className="text-sm mb-4">
            <span className="font-semibold">Search Params:</span>{" "}
            {searchParams.toString() || "None"}
          </p>
          <div className="flex gap-2">
            <Button onClick={() => router.push("/")}>Go Home</Button>
            <Button variant="outline" onClick={() => router.push("/about")}>
              About
            </Button>
            <Button variant="secondary" onClick={() => router.replace("/dashboard")}>
              Replace with Dashboard 
              Within the component
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About Next.js</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            You can access it using the <code>useRouter()</code> hook.
          </p>
          
        </CardContent>
      </Card>
    </main>
  )
}
