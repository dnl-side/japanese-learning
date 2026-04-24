import { RubyText, type RubySegment } from "@/app/components/ui/Ruby";
import type { JlptLocalizedText } from "@/data/jlpt";

export function JlptText({
  value,
  className,
}: {
  value?: JlptLocalizedText;
  className?: string;
}) {
  if (!value) return null;

  return (
    <span className={className}>
      {value.jp ? <RubyText segments={value.jp} /> : null}
      {value.es ? <span>{value.es}</span> : null}
      {value.note ? <span className="ml-2 text-xs opacity-70">{value.note}</span> : null}
    </span>
  );
}

export function JlptRubyBlock({
  segments,
  className,
}: {
  segments: readonly RubySegment[];
  className?: string;
}) {
  return <RubyText segments={segments} className={className} />;
}
