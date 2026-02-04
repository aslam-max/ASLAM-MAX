const NEWS_LETTER_JID = "120363402252728845@newsletter";
const BOT_NAME = "Aslam-max";
const DEFAULT_THUMBNAIL = "https://files.catbox.moe/vtg0x1.jpeg";

const createContext = (userJid, options = {}) => ({
    contextInfo: {
        mentionedJid: [userJid],
        forwardingScore: 999,
        isForwarded: true,
        businessMessageForwardInfo: {
            businessOwnerJid: NEWS_LETTER_JID,
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: NEWS_LETTER_JID,
            newsletterName: options.newsletterName || BOT_NAME,
            serverMessageId: Math.floor(100000 + Math.random() * 900000)
        },
        externalAdReply: {
            title: options.title || BOT_NAME,
            body: options.body || "Premium WhatsApp Bot Solution",
            thumbnailUrl: options.thumbnail || DEFAULT_THUMBNAIL,
            mediaType: 1,
            mediaUrl: options.mediaUrl || undefined,
            sourceUrl: options.sourceUrl || "https://wa.me/255716945971",
            showAdAttribution: true,
            renderLargerThumbnail: false 
        }
    }
});

module.exports = {
    createContext
};
