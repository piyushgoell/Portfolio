import { motion } from "framer-motion";
import { PortfolioData } from "@/lib/types/Portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { fadeInUp } from "@/lib/animate/Animation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa"; // Import a YouTube icon

const YoutubeChannel: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <motion.section
      id="youtube"
      className="w-full py-12 md:py-24 lg:py-32 bg-primary"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-12 text-text-heading drop-shadow-lg">
          {data.youtubeChannel.title}
        </h2>
        <motion.p className="text-3xl text-center text-text-muted mb-6">
          {data.youtubeChannel.description}
        </motion.p>
        {/* Subscribe Button for YouTube Channel */}
        <motion.div className="flex flex-col items-center mt-12 hover:scale-105">
          <Link
            href={`https://www.youtube.com/channel/${data.youtubeChannel.id}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-red-600 text-white text-lg px-8 py-3 rounded-md flex items-center justify-center hover:bg-red-700 transition-colors duration-200">
              <FaYoutube className="mr-2 h-5 w-5" /> {/* YouTube icon */}
              Subscribe Now
            </Button>
          </Link>
        </motion.div>
        <motion.div className="grid gap-6 sm:grid-cols-2 mt-6">
          {data?.youtubeChannel.playlists?.length > 0 ? (
            data.youtubeChannel.playlists.map((playlist, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <Card className="flex-1 flex flex-col h-full p-6 mt-6 bg-card text-card-foreground rounded-xl shadow-lg border border-transparent transition-transform duration-200 hover:scale-105 hover:border-secondary hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold mb-4 text-center text-secondary transition-colors duration-200">
                      {playlist.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 text-text-body">
                    <p className="transition-colors duration-200">
                      {playlist.description}
                    </p>
                  </CardContent>

                  {/* Embed YouTube Playlist Inside the Card */}
                  <CardContent className="mt-4">
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}`} // Ensure playlist.id is correct
                      frameBorder="0"
                      allowFullScreen
                      title={`YouTube Playlist - ${playlist.title}`}
                      className="rounded-lg shadow-md"
                    />
                  </CardContent>
                  <CardContent className="mt-auto">
                    <Link
                      href={playlist.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-secondary text-text-body hover:bg-white hover:text-primary transition-colors duration-200">
                        Watch Playlist
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-text-muted">
              No playlists available.
            </p>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default YoutubeChannel;
