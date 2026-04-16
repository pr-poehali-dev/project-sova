import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, pricing, image, features }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">

      {image ? (
        <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-6xl">
          <div className="flex flex-col flex-1">
            {subtitle && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                {subtitle}
              </motion.div>
            )}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h2>
            {content && (
              <motion.p
                className="text-lg md:text-xl max-w-xl mt-6 text-neutral-400"
                initial={{ opacity: 0, y: 50 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {content}
              </motion.p>
            )}
            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
                >
                  {buttonText}
                </Button>
              </motion.div>
            )}
          </div>
          <motion.div
            className="flex-1 max-w-lg w-full"
            initial={{ opacity: 0, x: 60 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={image}
              alt="EXHACK"
              className="w-full rounded-xl border border-[#FF4D00]/30 shadow-[0_0_40px_rgba(255,77,0,0.25)]"
            />
          </motion.div>
        </div>
      ) : (
        <>
          {subtitle && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.div>
          )}
          <motion.h2
            className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          {content && (
            <motion.p
              className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.p>
          )}
        </>
      )}

      {features && (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-10 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
              className="border border-neutral-800 bg-white/5 rounded-xl p-4 flex flex-col gap-2 hover:border-[#FF4D00]/50 transition-colors"
            >
              <Icon name={f.icon} size={20} className="text-[#FF4D00]" fallback="Zap" />
              <div className="text-white font-semibold text-sm">{f.name}</div>
              <div className="text-neutral-500 text-xs leading-snug">{f.description}</div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {pricing && (
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className={`flex-1 rounded-xl border p-6 flex flex-col gap-4 ${
                plan.highlighted
                  ? 'border-[#FF4D00] bg-[#FF4D00]/10'
                  : 'border-neutral-800 bg-white/5'
              }`}
            >
              {plan.highlighted && (
                <span className="text-xs font-bold text-[#FF4D00] uppercase tracking-widest">Популярный</span>
              )}
              <div>
                <div className="text-white font-bold text-xl">{plan.name}</div>
                <div className="text-[#FF4D00] font-bold text-3xl mt-1">{plan.price}</div>
                <div className="text-neutral-500 text-sm">{plan.period}</div>
              </div>
              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-neutral-300 text-sm">
                    <Icon name="Check" size={14} className="text-[#FF4D00] shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Button
                size="sm"
                className={`mt-2 w-full font-bold transition-colors ${
                  plan.highlighted
                    ? 'bg-[#FF4D00] text-black hover:bg-[#ff6a2a]'
                    : 'bg-transparent border border-[#FF4D00] text-[#FF4D00] hover:bg-[#FF4D00] hover:text-black'
                }`}
              >
                Купить
              </Button>
            </motion.div>
          ))}
        </motion.div>
      )}

      {showButton && !image && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}