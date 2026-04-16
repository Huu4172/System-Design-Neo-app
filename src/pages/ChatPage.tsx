import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import useResponsive from '../useResponsive';
import { colors } from '../styles/theme';

const userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgR-M7GcCKpZT9fLirzr8-VNb1bpRpGh1DbZbbfriDnC9eDNPN_kjk1wCN1rXPQHc5OCw_jsIeZlvmMhFBwQy7uNw2Lc0pNgcG3nnJnmIAC8FLmuhjze-fufILhlF3e8XOFACcytUcw0houaC4w47Qe5oSor2JhmryDIAeU_C3_zjP_Spg3gcWZKzSs5tqB-_Qu3Ja1Phzoi2HC6HF5N4Q-t0wSecHIQnNKIXQ7LL8YFuRherd9yX9dflZyJerQphyvGiwt3PXBUys';
const moodboardPreview = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzKezED3ytW_zQuKOc5dPFXLKBK5CzK3TyUktpaRwr9NQjgxbIpwVLDGdmyfzP7hoKut6oTUbJgdX5VZSIhoVeGP3hNIt1WsAKAxDaB6L5z56GWohFS4usKWVA7qDSoTYoJ1hNDOOCef4Qy3WVqqkgD4vl0N893_8uojqVddIkliGxyW03XIhGq8AisEAvB7PX8UeCs6rqBfhVfFtUiWBuQ41_W27qOiR9g9GLN7XJ-ZleBBgWhTQYbsHXXWkuletR5-gLIv-yrmmY';

const chatMessages = [
  {
    id: 'aura-greeting',
    type: 'assistant',
    title: 'Aura AI',
    text: 'Good morning. Your Techno-Zen mode is currently active. I have filtered out 14 non-essential notifications to preserve your creative flow. How shall we proceed with the Archive project today?',
    actions: ['View Summary', 'Dismiss'],
  },
  {
    id: 'user-request',
    type: 'user',
    text: 'That sounds perfect. Can you pull up the mood board for the spatial interface? I need to review the translucent layers.',
    status: 'Sent',
  },
  {
    id: 'aura-asset',
    type: 'asset',
    title: 'Aura AI',
    text: 'Retrieving the requested assets. Here is the primary visualization for the spatial interface layering.',
  },
];

const statusChips = [
  { icon: 'schedule', label: 'Scheduled', tone: 'neutral' },
  { icon: 'error-outline', label: 'Failed to sync', tone: 'error' },
  { icon: 'lock', label: 'End-to-end Zen', tone: 'accent' },
];

export default function ChatPage() {
  const { isMobile } = useResponsive();

  return (
    <>
      <View style={[styles.section, isMobile && styles.sectionMobile]}>
        <View style={styles.headerRow}>
          <View style={styles.badge}>
            <MaterialIcons name="forum" size={14} color={colors.cyan600} />
            <Text style={styles.badgeText}>CHAT SYSTEM</Text>
          </View>
        </View>
        <View style={[styles.header, isMobile && styles.headerMobile]}>
          <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>The Digital Sanctuary</Text>
          <Text style={styles.sectionDesc}>
            A techno-zen conversation canvas with quiet hierarchy, rich assistant responses, and command surfaces built for focus.
          </Text>
        </View>
      </View>

      <View style={[styles.chatFeed, isMobile && styles.chatFeedMobile]}>
        <View style={styles.dateDividerWrap}>
          <Text style={styles.dateDivider}>Today - 09:41 AM</Text>
        </View>

        {chatMessages.map((message) => {
          if (message.type === 'assistant') {
            return (
              <View key={message.id} style={styles.messageRow}>
                <View style={styles.assistantAvatarShell}>
                  <MaterialIcons name="smart-toy" size={16} color={colors.white} />
                </View>
                <View style={styles.assistantMessageWrap}>
                  <View style={styles.messageMetaRow}>
                    <Text style={styles.assistantLabel}>{message.title}</Text>
                  </View>
                  <View style={styles.assistantBubble}>
                    <Text style={styles.messageText}>{message.text}</Text>
                  </View>
                  <View style={styles.assistantActions}>
                    {message.actions.map((action) => (
                      <TouchableOpacity key={action} activeOpacity={0.7}>
                        <Text style={action === 'View Summary' ? styles.primaryActionText : styles.secondaryActionText}>
                          {action}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </View>
            );
          }

          if (message.type === 'asset') {
            return (
              <View key={message.id} style={styles.messageRowWide}>
                <View style={styles.assistantAvatarShell}>
                  <MaterialIcons name="smart-toy" size={16} color={colors.white} />
                </View>
                <View style={styles.assetMessageWrap}>
                  <View style={styles.messageMetaRow}>
                    <Text style={styles.assistantLabel}>{message.title}</Text>
                  </View>
                  <View style={styles.assetBubble}>
                    <Text style={[styles.messageText, styles.assetMessageText]}>{message.text}</Text>
                    <Image
                      source={{ uri: moodboardPreview }}
                      style={styles.assetPreview}
                    />
                    <View style={styles.assetCard}>
                      <View style={styles.assetInfoRow}>
                        <MaterialIcons name="image" size={20} color={colors.cyan600} />
                        <View>
                          <Text style={styles.assetTitle}>Aether_Mood_01.png</Text>
                          <Text style={styles.assetMeta}>2.4 MB • PNG</Text>
                        </View>
                      </View>
                      <TouchableOpacity activeOpacity={0.7}>
                        <MaterialIcons name="download" size={20} color={colors.outline} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }

          return (
            <View key={message.id} style={styles.userMessageRow}>
              <View style={styles.userAvatarShell}>
                <Image source={{ uri: userAvatar }} style={styles.userAvatar} />
              </View>
              <View style={styles.userMessageWrap}>
                <View style={styles.userBubble}>
                  <Text style={styles.messageText}>{message.text}</Text>
                </View>
                <View style={styles.userStatusRow}>
                  <Text style={styles.userStatusText}>{message.status}</Text>
                  <MaterialIcons name="check-circle" size={14} color={colors.cyan600} />
                </View>
              </View>
            </View>
          );
        })}

        <View style={styles.thinkingRow}>
          <View style={styles.thinkingAvatarShell}>
            <MaterialIcons name="smart-toy" size={14} color={colors.secondary} />
          </View>
          <View style={styles.thinkingBubble}>
            <View style={[styles.thinkingDot, { backgroundColor: colors.cyan400 }]} />
            <View style={[styles.thinkingDot, { backgroundColor: '#06b6d4' }]} />
            <View style={[styles.thinkingDot, { backgroundColor: colors.cyan600 }]} />
          </View>
          <View style={styles.thinkingTextWrap}>
            <Text style={styles.thinkingText}>Aura is thinking...</Text>
          </View>
        </View>
      </View>

      <View style={styles.galleryHeader}>
        <Text style={styles.galleryTitle}>Component Variations</Text>
      </View>

      <View style={[styles.galleryGrid, isMobile && styles.galleryGridMobile]}>
        <View style={styles.galleryCard}>
          <Text style={styles.cardEyebrow}>MESSAGE BUBBLE VARIANTS</Text>
          <View style={styles.variantStack}>
            <View style={styles.variantRow}>
              <View style={styles.variantAssistantAvatar}>
                <MaterialIcons name="smart-toy" size={12} color={colors.white} />
              </View>
              <View style={styles.variantAssistantBubble}>
                <Text style={styles.variantBubbleText}>AI Inline Response</Text>
              </View>
            </View>
            <View style={styles.variantRowReverse}>
              <View style={styles.variantUserBubble}>
                <Text style={styles.variantBubbleText}>User Compact Style</Text>
              </View>
              <View style={styles.variantUserAvatar}>
                <Image source={{ uri: userAvatar }} style={styles.variantUserAvatarImage} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.galleryCard}>
          <Text style={styles.cardEyebrow}>COMMAND INPUTS</Text>
          <View style={styles.inputStack}>
            <View style={styles.commandInputWrap}>
              <TextInput placeholder="Type a command..." placeholderTextColor={colors.slate400} style={styles.commandInput} />
              <TouchableOpacity style={styles.sendButton} activeOpacity={0.8}>
                <MaterialIcons name="arrow-upward" size={16} color={colors.white} />
              </TouchableOpacity>
            </View>
            <View style={[styles.commandInputWrap, styles.commandInputWrapSecondary]}>
              <TextInput placeholder="Generate an insight..." placeholderTextColor={colors.secondary} style={styles.commandInput} />
              <TouchableOpacity style={styles.sparkButton} activeOpacity={0.8}>
                <MaterialIcons name="flare" size={16} color={colors.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.statusCard}>
        <Text style={styles.cardEyebrow}>INTERACTION STATES</Text>
        <View style={styles.chipWrap}>
          {statusChips.map((chip) => (
            <View
              key={chip.label}
              style={[
                styles.statusChip,
                chip.tone === 'accent' && styles.statusChipAccent,
              ]}
            >
              <MaterialIcons
                name={chip.icon}
                size={16}
                color={chip.tone === 'error' ? colors.error : chip.tone === 'accent' ? colors.cyan600 : colors.cyan600}
              />
              <Text
                style={[
                  styles.statusChipText,
                  chip.tone === 'accent' && styles.statusChipTextAccent,
                ]}
              >
                {chip.label}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.latencyBlock}>
          <View style={styles.latencyRow}>
            <Text style={styles.latencyLabel}>System latency</Text>
            <Text style={styles.latencyValue}>12ms</Text>
          </View>
          <View style={styles.progressTrackSoft}>
            <LinearGradient
              colors={[colors.primary, colors.primaryContainer]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progressFill}
            />
          </View>
        </View>
      </View>

      <View style={styles.commandBarWrap}>
        <View style={styles.commandBar}>
          <TouchableOpacity style={styles.commandBarIcon} activeOpacity={0.7}>
            <MaterialIcons name="add" size={22} color={colors.slate400} />
          </TouchableOpacity>
          <TextInput placeholder="Message Aura AI..." placeholderTextColor={colors.slate400} style={styles.commandBarInput} />
          <TouchableOpacity style={styles.commandBarSend} activeOpacity={0.8}>
            <Text style={styles.commandBarSendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 40 },
  sectionMobile: { marginBottom: 24 },
  headerRow: { marginBottom: 16 },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    backgroundColor: '#e0f7fa',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: { fontSize: 11, fontWeight: 'bold', color: colors.cyan600, letterSpacing: 1 },
  header: { marginBottom: 8 },
  headerMobile: { marginBottom: 0 },
  sectionTitle: { fontSize: 40, fontWeight: 'bold', color: colors.onSurface, marginBottom: 12 },
  sectionTitleMobile: { fontSize: 30, marginBottom: 8 },
  sectionDesc: { color: colors.outline, fontSize: 15, lineHeight: 22, maxWidth: 640 },
  chatFeed: { marginBottom: 48, gap: 24 },
  chatFeedMobile: { marginBottom: 32, gap: 18 },
  dateDividerWrap: { alignItems: 'center' },
  dateDivider: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: colors.surfaceContainerLow,
    color: colors.outline,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  messageRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 16, maxWidth: '90%' },
  messageRowWide: { flexDirection: 'row', alignItems: 'flex-start', gap: 16, maxWidth: '95%' },
  assistantAvatarShell: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 3,
  },
  assistantMessageWrap: { gap: 8, maxWidth: '100%' },
  assetMessageWrap: { gap: 8, width: '100%' },
  messageMetaRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  assistantLabel: { fontSize: 10, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase', color: colors.secondary },
  assistantBubble: {
    backgroundColor: colors.surfaceContainerLowest,
    padding: 24,
    borderLeftWidth: 2,
    borderLeftColor: colors.secondary,
    borderRadius: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  assetBubble: {
    backgroundColor: colors.surfaceContainerLowest,
    padding: 8,
    borderLeftWidth: 2,
    borderLeftColor: colors.secondary,
    borderRadius: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  assetMessageText: { paddingHorizontal: 16, paddingTop: 16 },
  messageText: { color: colors.onSurface, fontSize: 15, lineHeight: 24 },
  assistantActions: { flexDirection: 'row', gap: 16, paddingHorizontal: 8 },
  primaryActionText: { fontSize: 10, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1, color: colors.cyan600 },
  secondaryActionText: { fontSize: 10, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1, color: colors.slate400 },
  userMessageRow: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    gap: 16,
    maxWidth: '90%',
  },
  userAvatarShell: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginTop: 4,
    overflow: 'hidden',
    backgroundColor: '#b7eaff',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  userAvatar: { width: '100%', height: '100%' },
  userMessageWrap: { alignItems: 'flex-end', gap: 8, flexShrink: 1 },
  userBubble: {
    backgroundColor: colors.surfaceContainerHigh,
    padding: 20,
    borderRadius: 16,
    borderTopRightRadius: 4,
  },
  userStatusRow: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', gap: 4, paddingHorizontal: 8 },
  userStatusText: { fontSize: 10, color: colors.slate400 },
  assetPreview: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 8,
    backgroundColor: colors.surfaceContainer,
  },
  assetCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surfaceContainerLow,
    padding: 16,
    borderRadius: 16,
  },
  assetInfoRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  assetTitle: { fontSize: 13, fontWeight: '700', color: colors.onSurface },
  assetMeta: { fontSize: 10, color: colors.outline, marginTop: 2 },
  thinkingRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  thinkingAvatarShell: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(97,0,198,0.12)',
    borderWidth: 2,
    borderColor: 'rgba(97,0,198,0.08)',
  },
  thinkingBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.surfaceContainerLow,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 999,
  },
  thinkingDot: { width: 6, height: 6, borderRadius: 3 },
  thinkingTextWrap: { justifyContent: 'center' },
  thinkingText: { fontSize: 10, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.2, color: colors.slate400 },
  galleryHeader: { marginTop: 20, marginBottom: 24 },
  galleryTitle: { fontSize: 30, fontWeight: '700', color: colors.onSurface },
  galleryGrid: { flexDirection: 'row', gap: 24, marginTop: 20, marginBottom: 40 },
  galleryGridMobile: { flexDirection: 'column', gap: 16 },
  galleryCard: {
    flex: 1,
    backgroundColor: colors.surfaceContainerLow,
    padding: 24,
    borderRadius: 24,
    gap: 24,
  },
  statusCard: {
    backgroundColor: colors.surfaceContainerLow,
    padding: 24,
    borderRadius: 24,
    gap: 24,
    marginBottom: 40,
  },
  cardEyebrow: { fontSize: 10, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.4, color: colors.cyan600 },
  variantStack: { gap: 16 },
  variantRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  variantRowReverse: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 12 },
  variantAssistantAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  variantAssistantBubble: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
  },
  variantUserBubble: {
    backgroundColor: '#dff7ff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  variantBubbleText: { fontSize: 13, color: colors.onSurface },
  variantUserAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#b7eaff',
  },
  variantUserAvatarImage: { width: '100%', height: '100%' },
  inputStack: { gap: 16 },
  commandInputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.white,
    paddingLeft: 20,
    paddingRight: 8,
    paddingVertical: 8,
    borderRadius: 999,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 2,
  },
  commandInputWrapSecondary: { backgroundColor: '#f4ebff' },
  commandInput: { flex: 1, minHeight: 40, color: colors.onSurface, fontSize: 15 },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  sparkButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  chipWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  statusChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: colors.white,
  },
  statusChipAccent: { backgroundColor: '#ecfeff' },
  statusChipText: { fontSize: 12, fontWeight: '700', color: colors.onSurface },
  statusChipTextAccent: { color: colors.cyan600 },
  latencyBlock: { gap: 12 },
  latencyRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  latencyLabel: { fontSize: 12, color: colors.outline },
  latencyValue: { fontSize: 12, fontWeight: '700', color: colors.cyan600 },
  progressTrackSoft: { height: 6, borderRadius: 999, overflow: 'hidden', backgroundColor: colors.white },
  progressFill: { width: '75%', height: '100%' },
  commandBarWrap: { marginBottom: 24 },
  commandBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'rgba(255,255,255,0.88)',
    padding: 10,
    borderRadius: 999,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.06,
    shadowRadius: 30,
    elevation: 4,
  },
  commandBarIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commandBarInput: { flex: 1, minHeight: 40, color: colors.onSurface, fontSize: 15 },
  commandBarSend: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
  commandBarSendText: { color: colors.white, fontWeight: '700', fontSize: 14 },
});