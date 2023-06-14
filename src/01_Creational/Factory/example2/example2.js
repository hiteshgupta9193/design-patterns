/** archive-btn.jsx */
class ArchiveBtn extends React.Component {
  render() {
    return <button onClick={this.onClick}>Archive</button>;
  }
  onClick = () => {
    /** Logic to Archive */
  };
}

/** Let's introduce search */
onClick = () => {
  if (this.props.search) {
    /** Logic to Archive Search - moved to a function archiveInSearch */
  } else {
    /** Logic to Archive - moved to a function archive */
  }
};

/** Let's introduce bulk */
onClick = () => {
  if (this.props.bulk) {
    if (this.props.search) {
      /** Logic to Archive Bulk Search - moved to a function archiveBulkInSearch */
    } else {
      /** Logic to Archive Bulk - moved to a function archiveBulk */
    }
  } else {
    if (this.props.search) {
      /** Logic to Archive Search - moved to a function archiveInSearch */
    } else {
      /** Logic to Archive - moved to a function archive */
    }
  }
};

/**
 * Let's introduce single threaded - 1 message per thread view
 * which will introduce 4 more combinations
 * - Single Threaded
 * - Single Threaded Search
 * - Single Threaded Bulk
 * - Single Threaded Bulk Search
 */

/**
 * Other possible buttons
 * - Mark as read
 * - Mark as unread
 * - Delete
 * - Move to folder
 * - Spam
 * - Unspam
 * - Star
 * - Unstar
 */
