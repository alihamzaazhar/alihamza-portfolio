type SectionHeadProps = {
  num: string
  title: string
}

const SectionHead = ({ num, title }: SectionHeadProps) => (
  <div className="sec-head">
    <span className="sec-num">{num}</span>
    <h2 className="sec-title">{title}</h2>
    <span className="sec-rule" />
  </div>
)

export default SectionHead
