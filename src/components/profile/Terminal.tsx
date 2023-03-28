import { HoverScale } from "../styles/Animate";
import { codeData, reservedWords } from "../../data/data";
import * as S from "./Terminal.styles";

const Terminal = () => {
  return (
    <S.TerminalContainerStyle>
      {/* Terminal Buttons */}
      <S.BtnContainers>
        <S.ButtonStyle color="tomato" />
        <S.ButtonStyle color="#FFBF2E" />
        <S.ButtonStyle color="#27CA40" />
      </S.BtnContainers>

      {/* Terminal Content */}
      <S.ContentStyle>
        {codeData.map((line, idx) => (
          <CodeLine key={idx} text={line.text} indent={line["size"]} />
        ))}
      </S.ContentStyle>

      {/* Command Run Button */}
      <HoverScale>
        <RunBtn />
      </HoverScale>
    </S.TerminalContainerStyle>
  );
};

const RunBtn = () => {
  return (
    <a href="#history-container">
      <em>Click to run</em>
    </a>
  );
};

const CodeLine = ({
  text,
  indent,
}: {
  text: string;
  indent: number;
}): JSX.Element => {
  const _indent = indent * 10;
  return (
    <S.CodeLineStyle indent={_indent}>{formatCodeLine(text)}</S.CodeLineStyle>
  );
};

const formatCodeLine = (str: string) => {
  let ans = [];
  for (const word of str.split(" ")) {
    if (reservedWords.has(word))
      ans.push(<span className="word green">{word}</span>);
    else ans.push(<span className="word">{word}</span>);
  }
  return ans;
};

export default Terminal;
