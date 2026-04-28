import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import WorkflowStepper from './WorkflowStepper';

const BOT = { _id: 2, name: 'Assistant', avatar: 'https://ui-avatars.com/api/?name=AI&background=007AFF&color=fff' };
const STEPS = ['Plan', 'Build', 'Test', 'Deploy'];
const WORKFLOW_MSG_ID = 'workflow-1';

export default function App() {
  const [messages, setMessages] = useState([]);

  // Seed initial messages including a workflow message at step 0
  useEffect(() => {
    setMessages([
      {
        _id: WORKFLOW_MSG_ID,
        text: '',
        createdAt: new Date(),
        user: BOT,
        workflow: { steps: STEPS, currentStep: 0 },
      },
      {
        _id: 'intro',
        text: 'Starting your deployment workflow…',
        createdAt: new Date(Date.now() - 1000),
        user: BOT,
      },
    ]);
  }, []);

  // Simulate live WebSocket updates — advance step every 2.5s
  useEffect(() => {
    let step = 0;
    const timer = setInterval(() => {
      step += 1;
      if (step > STEPS.length) {
        clearInterval(timer);
        return;
      }
      setMessages(prev =>
        prev.map(m =>
          m._id === WORKFLOW_MSG_ID
            ? { ...m, workflow: { ...m.workflow, currentStep: step } }
            : m
        )
      );
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const renderCustomView = useCallback((props) => {
    const wf = props.currentMessage?.workflow;
    if (!wf) return null;
    return <WorkflowStepper steps={wf.steps} currentStep={wf.currentStep} />;
  }, []);

  const onSend = useCallback((newMsgs = []) => {
    setMessages(prev => GiftedChat.append(prev, newMsgs));
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{ _id: 1 }}
        renderCustomView={renderCustomView}
        renderUsernameOnMessage
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
