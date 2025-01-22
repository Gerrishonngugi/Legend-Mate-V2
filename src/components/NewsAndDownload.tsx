import { Download, ExternalLink } from 'lucide-react';

export default function NewsAndDownload() {
  const downloadLinks = [
    { platform: 'Steam', url: 'https://store.steampowered.com/app/1172470/Apex_Legends/' },
    { platform: 'EA App', url: 'https://www.ea.com/games/apex-legends' },
    { platform: 'PlayStation', url: 'https://store.playstation.com/en-us/product/UP0006-PPSA02409_00-APEXLEGENDRSPWN1' },
    { platform: 'Xbox', url: 'https://www.xbox.com/en-US/games/apex-legends' },
    { platform: 'Nintendo Switch', url: 'https://www.nintendo.com/store/products/apex-legends-switch/' },
  ];

  return (
    <div className="bg-gray-800/90 rounded-lg shadow-xl p-8 backdrop-blur-sm mt-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* News Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Latest News</h3>
          <div className="space-y-6">
            <a 
              href="https://www.ea.com/games/apex-legends/news" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-semibold mb-2">View All News</h4>
                  <p className="text-gray-300">Stay up to date with the latest updates, events, and announcements</p>
                </div>
                <ExternalLink className="text-gray-400" />
              </div>
            </a>
          </div>
        </div>

        {/* Download Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Download Now</h3>
          <div className="grid grid-cols-1 gap-4">
            {downloadLinks.map(({ platform, url }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Download className="text-red-400" />
                  <span className="text-white">{platform}</span>
                </div>
                <ExternalLink className="text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}