/** archive-btn.jsx */
class ArchiveBtn extends React.Component {
  render() {
    return <button onClick={this.onClick}>Archive</button>;
  }
  onClick = () => {
    TaskFactory.archive(params);
  };
}
class ConversationViewSingleTaskFactory {}
class ConversationViewBulkTaskFactory {}
class ConversationViewInSearchSingleTaskFactory {}
class ConversationViewInSearchBulkTaskFactory {}
class MessageViewSingleTaskFactory {}
class MessageViewBulkTaskFactory {}
class MessageViewInSearchSingleTaskFactory {}
class MessageViewInSearchBulkTaskFactory {}

class TaskFactory {
  static archive(params) {
    if (params.bulk) {
      if (params.search) {
        ConversationViewInSearchBulkTaskFactory.archive();
      } else {
        ConversationViewInSearchBulkTaskFactory.archive();
      }
    } else {
      if (params.search) {
        ConversationViewBulkTaskFactory.archive();
      } else {
        ConversationViewSingleTaskFactory.archive();
      }
    }
  }
}
