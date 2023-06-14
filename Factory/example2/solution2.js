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

class TaskFactoryManager {
  static getFactory(context) {
    switch (context) {
      case "conversationViewSingleThread":
        return ConversationViewSingleTaskFactory;
      case "conversationViewBulkThread":
        return ConversationViewBulkTaskFactory;
      case "conversationViewInSearchSingleThread":
        return ConversationViewInSearchSingleTaskFactory;
      case "conversationViewInSearchBulkThread":
        return ConversationViewInSearchBulkTaskFactory;
      case "messageViewSingleThread":
        return MessageViewSingleTaskFactory;
      case "messageViewBulkThread":
        return MessageViewBulkTaskFactory;
      case "messageViewInSearchSingleThread":
        return MessageViewInSearchSingleTaskFactory;
      case "messageViewInSearchBulkThread":
        return MessageViewInSearchBulkTaskFactory;
      default:
        throw new Error("Invalid context");
    }
  }
}

const { search, singleThreaded } = params;

class TaskFactory {
  static archive(params) {
    TaskFactoryManager.getFactory(params.context).archive(params);
  }
}
