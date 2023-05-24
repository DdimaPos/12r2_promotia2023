#include <iostream>
#include <filesystem>
namespace fs = std::filesystem;

int main() {
    std::string folderPath = "img/fotosesie"; // Замените на путь к вашей папке
    for (const auto& entry : fs::directory_iterator(folderPath)) {
        if (entry.is_regular_file()) {
            std::cout <<"'" <<"img/fotosesie/"<< entry.path().filename().string() << "'" <<","<< std::endl;
        }
    }
    return 0;
}