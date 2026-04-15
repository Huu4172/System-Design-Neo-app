import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../useResponsive';
import { styles } from '../styles/OverlaysModals.styles';

const avatarUri = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUjhGZSSfpMZPGSXbIoulaCMOLInOU_nL_HQkGqZmvxv3sYcyz4VKtBjCVDZT1n3ZmqfIQFfU1pRhZgmHbhZA8VGKEINZFKIIdcd-LYgbJR7mhiRRnq1F4ev_Gw4ebz-I6cpxAHpY33F1xk8-YPbjDsrdcwm3YYi9b7r6rpxL8XOKsZ0GS1kzRQdV-HwEQP9LLgFaVuUclDyW97w9EnL7lNXFie9YrN6CiAXidZzNRkG-HgGG_KPrxQxdsO5tKCeygKyuqgCbjoB4z';

export default function OverlaysModals() {
  const { isMobile } = useResponsive();

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={styles.sectionLabel}>SECTION 06</Text>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Overlays & Modals</Text>
        <Text style={styles.sectionDesc}>
          Floating interfaces that interrupt the flow for critical decisions or focused configurations.
        </Text>
      </View>

      <View style={styles.stack}>
        <View style={[styles.showcaseCard, isMobile && styles.showcaseCardMobile]}>
          <Text style={styles.showcaseLabel}>STANDARD MODAL</Text>
          <View style={styles.modalShell}>
            <View style={styles.modalCard}>
              <View style={styles.modalHeaderRow}>
                <Text style={styles.modalTitle}>Update AI Avatar</Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <MaterialIcons name="close" size={20} color="#6c797f" />
                </TouchableOpacity>
              </View>
              <View style={[styles.avatarPanel, isMobile && styles.avatarPanelMobile]}>
                <View style={styles.selectedAvatarFrame}>
                  <Image source={{ uri: avatarUri }} style={styles.selectedAvatarImage} />
                </View>
                <View style={styles.avatarSwatchGrid}>
                  <View style={styles.avatarSwatch} />
                  <View style={[styles.avatarSwatch, styles.avatarSwatchSecondary]} />
                  <View style={[styles.avatarSwatch, styles.avatarSwatchTertiary]} />
                </View>
              </View>
              <View style={styles.modalActions}>
                <TouchableOpacity style={styles.textAction} activeOpacity={0.7}>
                  <Text style={styles.textActionLabel}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.primaryAction} activeOpacity={0.8}>
                  <Text style={styles.primaryActionLabel}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.showcaseCard, isMobile && styles.showcaseCardMobile]}>
          <Text style={styles.showcaseLabel}>CONFIRMATION DIALOG</Text>
          <View style={styles.confirmShell}>
            <View style={styles.confirmCard}>
              <View style={styles.warningIconWrap}>
                <MaterialIcons name="warning" size={24} color="#ba1a1a" />
              </View>
              <Text style={styles.confirmTitle}>Delete Task?</Text>
              <Text style={styles.confirmDesc}>
                This action cannot be undone. All associated creative assets will be permanently removed from the shell.
              </Text>
              <View style={styles.confirmActions}>
                <TouchableOpacity style={styles.keepButton} activeOpacity={0.7}>
                  <Text style={styles.keepButtonText}>Keep</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} activeOpacity={0.8}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.showcaseCard, isMobile && styles.showcaseCardMobile]}>
          <Text style={styles.showcaseLabel}>NOTIFICATION TOAST</Text>
          <View style={styles.toastShell}>
            <View style={styles.toastPill}>
              <View style={styles.toastInfoRow}>
                <MaterialIcons name="check-circle" size={20} color="#4cd6ff" />
                <Text style={styles.toastText}>Task synchronized</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <MaterialIcons name="close" size={16} color="#6c797f" />
              </TouchableOpacity>
            </View>
            <Text style={styles.toastStateLabel}>SUCCESS ACTIVE</Text>
          </View>
        </View>
      </View>
    </View>
  );
}