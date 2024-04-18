import StyledModal from "./StyledComponents/StyledModal";
import { StyledButton } from "./StyledComponents/StyledButton";
import { StyledHeadlineH3 } from "./StyledComponents/StyledHeadline";
import {
  StyledRadioButton,
  StyledRadioButtonLabel,
} from "./StyledComponents/StyledInput";

export default function ModalSort({
  onSortComplexityStartHigh,
  onSortComplexityStartLow,
  onSortDuration,
  onToggleSortModal,
}) {
  return (
    <StyledModal>
      <StyledHeadlineH3>Sort projects by ...</StyledHeadlineH3>
      <StyledRadioButtonLabel htmlFor="duration-short">
        <StyledRadioButton
          type="radio"
          id="duration-short"
          name="sort"
          value="duration"
          onClick={() => onSortDuration("short")}
        />
        Duration: short to long
      </StyledRadioButtonLabel>

      <StyledRadioButtonLabel htmlFor="duration-long">
        <StyledRadioButton
          type="radio"
          id="duration-long"
          name="sort"
          value="duration"
          onClick={() => onSortDuration("long")}
        />
        Duration: long to short
      </StyledRadioButtonLabel>

      <StyledRadioButtonLabel htmlFor="complexity-low">
        <StyledRadioButton
          type="radio"
          id="complexity-low"
          name="sort"
          value="complexity"
          onClick={onSortComplexityStartLow}
        />
        Complexity: Beginner to Advanced
      </StyledRadioButtonLabel>

      <StyledRadioButtonLabel htmlFor="complexity-high">
        <StyledRadioButton
          type="radio"
          id="complexity-high"
          name="sort"
          value="complexityd"
          onClick={onSortComplexityStartHigh}
        />
        Complexity: Adcanced to Beginner
      </StyledRadioButtonLabel>

      <StyledButton type="button" onClick={onToggleSortModal}>
        Cancel
      </StyledButton>
    </StyledModal>
  );
}
