import { Field, FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

type ProgressBarProps = {
  progress: number
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="progress-upload">
        <span>Upload progress</span>
              <span className="ml-auto">{progress}%</span>
      </FieldLabel>
      <Progress value={progress} id="progress-upload" />
    </Field>
  )
}
    