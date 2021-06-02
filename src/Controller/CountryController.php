<?php

namespace App\Controller;

use App\Entity\City;
use App\Entity\Country;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class CountryController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/countries", name="get_countries")
     */
    public function getCountries(): Response
    {
        $countries = $this->entityManager
            ->getRepository(Country::class)
            ->findAll();

        return $this->json($countries);
    }

    /**
     * @Route("/cities/{countryId}", name="get_cities")
     */
    public function getCities(Request $request, $countryId): Response
    {
        $request = json_decode($request->getContent(), false);

        $country = $this->entityManager
            ->getRepository(Country::class)
            ->find($countryId);

        $cities = [];

        if (isset($country)) {
            $cities = $this->entityManager
                ->getRepository(City::class)
                ->findByCountry($country, $request->query);

            $cities = $this->citiesDecorate($cities);
        }

        return $this->json($cities);
    }

    public function citiesDecorate($cities)
    {
        $decorate = [];
        /** @var City $city */
        foreach ($cities as $city) {
            $decorate[] = [
                'id' => $city->getId(),
                'nameRu' => $city->getNameRu(),
                'nameEn' => $city->getNameEn()
            ];
        }
        return $decorate;
    }
}
